import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import CardHeaderElements from "./CardHeaderElements";
import { FaPen, FaCheck, FaTimes } from "react-icons/fa";

describe("CardHeaderElements", () => {
  const init = (props) => {
    const defaultProps = {
      onCbChange: jest.fn(),
      onPenClick: jest.fn(),
      onSaveClick: jest.fn(),
      onCancelClick: jest.fn(),
    };

    return [
      shallow(<CardHeaderElements {...defaultProps} {...props} />),
      { ...defaultProps, ...props },
    ];
  };

  it("should render without crashes", () => {
    const [wrapper, _] = init();
    expect(wrapper).toBeDefined();
  });

  it("should/shouldn't render pencil", () => {
    let [wrapper, _] = init({ isViewMode: true });
    expect(wrapper.find(FaPen).length).toBe(0);

    const [wrapperPencil, __] = init({ isViewMode: false });
    expect(wrapperPencil.find(FaPen).length).toBe(1);
  });

  it("should/shouldn't render input", () => {
    const [wrapper, _] = init({ isSeparatePath: true });
    expect(wrapper.find("input").length).toBe(0);

    const [wrapperInput, __] = init({ isSeparatePath: false });
    expect(wrapperInput.find("input").length).toBe(1);
  });

  it("should change input", () => {
    const [wrapper, props] = init();
    wrapper.find("input").simulate("change", {
      target: { value: "value" },
    });
    expect(props.onCbChange).toHaveBeenCalled();
  });

  it("should click on the FaPen", () => {
    const [wrapper, props] = init();

    /*const setPenClicked = jest.fn();
    const mockState = jest.spyOn(React, "useState");
    mockState.mockImplementation(penClicked => [penClicked, setPenClicked])*/

    wrapper.find(FaPen).simulate("click");
    expect(props.onCbChange).toBeCalled();
    expect(props.onPenClick).toBeCalled();
  });

  it("should click on the FaCheck", () => {
    const [wrapper, props] = init();
    wrapper.find(FaPen).simulate("click");
    wrapper.find(FaCheck).simulate("click");
    expect(props.onSaveClick).toBeCalled();
    expect(props.onPenClick).toBeCalled();
  });

  it("should click on the FaTimes", () => {
    const [wrapper, props] = init();
    wrapper.find(FaPen).simulate("click");
    wrapper.find(FaTimes).simulate("click");
    expect(props.onCancelClick).toBeCalled();
    expect(props.onPenClick).toBeCalled();
  });

  //this test doesn't work
  it("should call useState", () => {
    const [wrapper, _] = init();
    const setPenClicked = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setPenClicked]);
    wrapper.find(FaPen).props().onClick();
    expect(setPenClicked).toHaveBeenCalledWith(true);
  });
});
