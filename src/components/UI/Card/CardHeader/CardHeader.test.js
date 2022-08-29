import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import CardHeader from "./CardHeader";
import CardHeaderElements from "./CardHeaderElements";

describe("CardHeader", () => {
  let wrapper;
  const defaultProps = {
    onCbChange: jest.fn(),
    onPenClick: jest.fn(),
    onSaveClick: jest.fn(),
    onCancelClick: jest.fn(),
    contentEditableHandler: true,
    cbValueForStyle: false,
    onHeaderBlurHandler: jest.fn(),
    isViewMode: false,
    isSeparatePath: false,
    children: "header",
  };

  beforeEach(() => {
    wrapper = shallow(<CardHeader {...defaultProps} />);
  });

  it("should render without crashes", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render CardHeaderElements", () => {
    expect(wrapper.find(CardHeaderElements)).toHaveLength(1);
  });

  it("should render header with correct text", () => {
    expect(wrapper.find("#headerText").prop("children")).toEqual(
      defaultProps.children
    );
  });

  it("should call onBlur", () => {
    wrapper.find("#headerText").simulate("blur", {
      target: {},
    });
    expect(defaultProps.onHeaderBlurHandler).toHaveBeenCalled();
  });

  it("should pass props to the child", () => {
    const cardHeaderElements = wrapper.find(CardHeaderElements);

    cardHeaderElements.prop("onCbChange")();
    expect(defaultProps.onCbChange).toHaveBeenCalled();

    cardHeaderElements.prop("onPenClick")();
    expect(defaultProps.onPenClick).toHaveBeenCalled();

    cardHeaderElements.prop("onSaveClick")();
    expect(defaultProps.onSaveClick).toHaveBeenCalled();

    cardHeaderElements.prop("onCancelClick")();
    expect(defaultProps.onCancelClick).toHaveBeenCalled();
  });
});
