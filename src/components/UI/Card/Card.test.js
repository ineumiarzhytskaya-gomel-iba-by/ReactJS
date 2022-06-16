import React from "react";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import { useDispatch } from "react-redux";
jest.mock("react-redux");

import Card from "./Card";

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

    return [
      mount(<Card {...defaultProps} {...props} />),
      { ...defaultProps, ...props },
    ];
  };

  it("should render without crashes", () => {
    const [wrapper, _] = init();
    expect(wrapper).toBeDefined();
  });
});
