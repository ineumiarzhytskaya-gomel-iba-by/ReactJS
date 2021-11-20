import React, { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import CardList from "./components/UI/CardList";
import ViewOnly from "./components/UI/ViewOnly";

function App() {
  const initialCardsData = [
    {
      id: 0,
      headerText: "Caption",
      bodyText: `Building interactive user interfaces in React is fun and easy. You
        just need to describe how parts of the application interface look in
        different states. React will update them in a timely manner when the
        data changes`,
    },
    {
      id: 1,
      headerText: "Components",
      bodyText: `React lets you define components as classes or functions. 
        Components defined as classes currently provide more features which 
        are described in detail on this page. To define a React component class, 
        you need to extend React.Component`,
    },
    {
      id: 2,
      headerText: "Render",
      bodyText: `The only method you must define in a React.Component subclass 
          is called render(). All the other methods described on this page are optional`,
    },
    {
      id: 3,
      headerText: "Constructor",
      bodyText: `The constructor for a React component is called before it is mounted. 
          When implementing the constructor for a React.Component subclass, you should call 
          super(props) before any other statement. Otherwise, this.props will be undefined 
          in the constructor`,
    },
    {
      id: 4,
      headerText: "State",
      bodyText: `The state contains data specific to this component that may change over 
          time. The state is user-defined, and it should be a plain JavaScript object`,
    },
    {
      id: 5,
      headerText: "Set state",
      bodyText: `setState() enqueues changes to the component state and tells React that 
          this component and its children need to be re-rendered with the updated state. 
          This is the primary method you use to update the user interface in response to event 
          handlers and server responses`,
    },
    {
      id: 6,
      headerText: "Note",
      bodyText: `Avoid copying props into state! This is a common mistake!`,
    },
    {
      id: 7,
      headerText: "Render",
      bodyText: `The render() method is the only required method in a class component. 
          When called, it should examine this.props and this.state and return one of the 
          following types: React elements, Arrays and fragments, Portals, String and numbers, 
          Booleans or null`,
    },
  ];

  const [cardsText, setCardsText] = useState(initialCardsData);

  //view mode if view checbox is checked
  const [viewMode, setViewMode] = useState(false);

  //setting/unsetting view mode
  const viewModeChangeHandler = () => {
    setViewMode(!viewMode);
  };

  //updating data of the cards list
  const updatedCardTextHandler = (newCardText) => {
    //finding index of changed card in the array of cards
    const newCardId = cardsText.findIndex(
      (cardText) => cardText.id === newCardText.id
    );

    //Updating text of the changed card
    const newCards = [...cardsText];
    newCards[newCardId] = newCardText;

    setCardsText([...newCards]);
  };

  return (
    <>
      <Header></Header>
      <ViewOnly onViewModeChange={viewModeChangeHandler}></ViewOnly>
      <CardList
        cardsText={cardsText}
        isViewMode={viewMode}
        onUpdatedCardText={updatedCardTextHandler}
      ></CardList>
    </>
  );
}

export default App;
