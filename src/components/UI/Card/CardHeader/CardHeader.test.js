import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import CardHeader from "./CardHeader";
import CardHeaderElements from "./CardHeaderElements";

describe("CardHeader", () => {
  const init = (props) => {
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
    };

    return [
      shallow(<CardHeader {...defaultProps} {...props} />),
      { ...defaultProps, ...props },
    ];
  };

  it("should render without crashes", () => {
    const [wrapper, _] = init();
    expect(wrapper).toBeDefined();
  });

  it("should call onBlur", () => {
    const [wrapper, props] = init();
    wrapper.find("#headerText").simulate("blur", {
      target: {},
    });
    expect(props.onHeaderBlurHandler).toHaveBeenCalled();
  });

  it("should pass props to the child", () => {
    const [wrapper, props] = init();
    const cardHeaderElements = wrapper.find(CardHeaderElements);

    cardHeaderElements.prop("onCbChange")();
    expect(props.onCbChange).toHaveBeenCalled();

    cardHeaderElements.prop("onPenClick")();
    expect(props.onPenClick).toHaveBeenCalled();

    cardHeaderElements.prop("onSaveClick")();
    expect(props.onSaveClick).toHaveBeenCalled();

    cardHeaderElements.prop("onCancelClick")();
    expect(props.onCancelClick).toHaveBeenCalled();
  });
});
