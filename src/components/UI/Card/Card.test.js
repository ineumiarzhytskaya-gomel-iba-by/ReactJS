import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

import { Card } from "./Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

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
const mockState = {
  card: {
    cardsText: [
      {
        bodyText: "body",
        headerText: "header",
        id: "id",
        isSeparatePath: false,
      },
      {
        bodyText: "body2",
        headerText: "header2",
        id: "id2",
        isSeparatePath: false,
      },
    ],
    selectionList: [],
    errorMessage: null,
    viewMode: false,
  },
  users: {
    token: "abcdef",
    isLoggedIn: true,
    isAdmin: false,
    email: "vasya@gmail.com",
  },
};
const mockDispatch = jest.fn();

describe("Card", () => {
  let useStateSpy;

  const mountWithStore = () => {
    const mockStore = configureStore([]);

    const store = mockStore(mockState);
    store.dispatch = mockDispatch;

    return mount(
      <BrowserRouter>
        <Provider store={store}>
          <Card {...defaultProps} />
        </Provider>
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    const setState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should render without crashes", () => {
    const wrapper = mountWithStore();
    expect(wrapper).toBeDefined();
  });

  it("should render CardHeader", () => {
    const wrapper = mountWithStore();
    expect(wrapper.find(CardHeader)).toHaveLength(1);
  });

  it("should render CardBody", () => {
    const wrapper = mountWithStore();
    expect(wrapper.find(CardBody)).toHaveLength(1);
  });

  it("should call dispatch when double clicking on the card", () => {
    const wrapper = mountWithStore();
    wrapper.find(".card").simulate("doubleClick");
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should call dispatch when saving the card", () => {
    const wrapper = mountWithStore();
    wrapper.find(CardHeader).prop("onSaveClick")();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should call dispatch inside useEffect", () => {
    const wrapper = mountWithStore();
    wrapper.setProps({ id: "newId" });
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("should call cbChangeHandler", () => {
    const wrapper = mountWithStore();
    wrapper.find(CardHeader).prop("onCbChange")();
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should call penClickHandler", () => {
    const wrapper = mountWithStore();
    wrapper.find(CardHeader).prop("onPenClick")();
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should call cancelClickHandler", () => {
    const wrapper = mountWithStore();
    wrapper.find(CardHeader).prop("onCancelClick")();
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should call inputFinishHandler by CardHeader", () => {
    const wrapper = mountWithStore();
    wrapper.find(CardHeader).prop("onHeaderBlurHandler")({ id: "id" });
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should call inputFinishHandler by CardBody", () => {
    const wrapper = mountWithStore();
    wrapper.find(CardBody).prop("onBodyBlurHandler")({ id: "id" });
    expect(useStateSpy).toHaveBeenCalled();
  });

  it("should not call dispatch when double clicking the card in view mode", () => {
    const mockStore = configureStore([]);
    const store = mockStore(mockState);
    store.dispatch = mockDispatch;
    const wrapper = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Card {...defaultProps} isViewMode={true} />
        </Provider>
      </BrowserRouter>
    );
    wrapper.find(".card").simulate("doubleClick");
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
