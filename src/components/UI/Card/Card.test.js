import React from "react";
import { Provider } from "react-redux";
import store from "./../../../store";
import { BrowserRouter } from "react-router-dom";

import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import { Card } from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardHeaderElements from "./CardHeader/CardHeaderElements";
import { FaCheck, FaPen, FaTimes } from "react-icons/fa";

describe("Card", () => {
  const init = (props) => {
    const defaultProps = {
      id: "id",
      cardText: {
        bodyText: "body",
        headerText: "header",
        id: "id",
        isSeparatePath: false,
      },
      isViewMode: false,
    };

    return mount(
      <BrowserRouter>
        <Provider store={store}>
          <Card {...defaultProps} {...props} />
        </Provider>
      </BrowserRouter>
    );
  };

  // When useStateSpy is defined globally, all the tests fail. When it is defined separately in every test
  // like in the comments, the first test with useStateSpy passes and any test written after it fails.
  // The error message changes a little when I comment BrowserRouter here and useHistory in Card file

  const wrapper = init();
  const useStateSpy = jest.spyOn(React, "useState");

  it("should render without crashes", () => {
    //const wrapper = init();
    expect(wrapper).toBeDefined();
  });

  it("should call cbChangeHandler", () => {
    //const wrapper = init();
    //let useStateSpy = jest.spyOn(React, "useState");
    wrapper
      .find(CardHeaderElements)
      .find(FaPen)
      .simulate("click", { target: {} });
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should call penClickHandler when clicking on the pen", () => {
    //const wrapper = init();
    //let useStateSpy = jest.spyOn(React, "useState");
    wrapper
      .find(CardHeaderElements)
      .find(".cb")
      .simulate("change", { target: {} });
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should call saveClickHandler when saving changes", () => {
    //const wrapper = init();
    //let useStateSpy = jest.spyOn(React, "useState");
    wrapper
      .find(CardHeaderElements)
      .find(FaPen)
      .simulate("click", { target: {} });
    wrapper
      .find(CardHeaderElements)
      .find(FaCheck)
      .simulate("click", { target: {} });
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should call cancelClickHandler when canceling changes", () => {
    //const wrapper = init();
    //let useStateSpy = jest.spyOn(React, "useState");
    wrapper
      .find(CardHeaderElements)
      .find(FaPen)
      .simulate("click", { target: {} });
    wrapper
      .find(CardHeaderElements)
      .find(FaTimes)
      .simulate("click", { target: {} });
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should call inputFinishHandler when the input looses focus", () => {
    //const wrapper = init();
    //let useStateSpy = jest.spyOn(React, "useState");
    wrapper.find(CardBody).find("#bodyText").simulate("blur", {
      target: {},
    });
    expect(useStateSpy).toHaveBeenCalled();

    wrapper.find(CardHeader).find("#headerText").simulate("blur", {
      target: {},
    });
    expect(useStateSpy).toHaveBeenCalled();
  });
});
