import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import CardBody from "./CardBody";

describe("CardBody", () => {
  let wrapper;
  const defaultProps = {
    contentEditableHandler: true,
    onBodyBlurHandler: jest.fn(),
    children: "body",
  };

  beforeEach(() => {
    wrapper = shallow(<CardBody {...defaultProps} />);
  });

  it("should render without crashes", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render component with correct body text", () => {
    expect(wrapper.find("div").prop("children")).toEqual(defaultProps.children);
  });

  it("should call onBlur", () => {
    wrapper.find("div").simulate("blur", {
      target: {},
    });
    expect(defaultProps.onBodyBlurHandler).toHaveBeenCalled();
  });
});
