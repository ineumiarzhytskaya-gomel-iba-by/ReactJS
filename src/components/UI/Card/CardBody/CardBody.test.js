import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import CardBody from "./CardBody";

describe("CardBody", () => {
  const init = (props) => {
    const defaultProps = {
      contentEditableHandler: true,
      onBodyBlurHandler: jest.fn(),
    };

    return [
      shallow(<CardBody {...defaultProps} {...props} />),
      { ...defaultProps, ...props },
    ];
  };

  it("should render without crashes", () => {
    const [wrapper, _] = init();
    expect(wrapper).toBeDefined();
  });

  it("should call onBlur", () => {
    const [wrapper, props] = init();
    wrapper.find("div").simulate("blur", {
      target: {},
    });
    expect(props.onBodyBlurHandler).toHaveBeenCalled();
  });
});
