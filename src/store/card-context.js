import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const CardContext = React.createContext({
  cardsData: [
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
  ],
  onUpdatedCardText: (currentValue) => {},
  onAddCard: (cardHeader, cardBody) => {},
  onDeleteCards: () => {},
  onAddToSelectionList: (cardId, isSelected, isEdited) => {},
});

export const CardContextProvider = (props) => {
  const ctx = useContext(CardContext);

  const [cardsText, setCardsText] = useState(ctx.cardsData);
  const [selectionList, setSelectionList] = useState([]); //array with ids of selected cards

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

  //adding new card
  const addCardHandler = (newCardHeader, newCardBody) => {
    setCardsText((prevCards) => [
      ...prevCards,
      { id: uuidv4(), headerText: newCardHeader, bodyText: newCardBody },
    ]);
  };

  const addToSelectionListHandler = (cardId, isSelected, isEdited) => {
    //adding selected cards to the list
    if (isSelected && !isEdited) {
      setSelectionList((prevList) => [...prevList, cardId]);
      //deleting cards from the list if they were unselected
    } else if (!isSelected) {
      let index = selectionList.indexOf(cardId);

      if (index !== -1) {
        let tempList = [...selectionList];
        tempList.splice(index, 1);
        setSelectionList(() => [...tempList]);
      }
    }
  };

  //clicking the delete button
  const deleteCardsHandler = () => {
    let tempCards = [...cardsText];
    tempCards = tempCards.filter((card) => !selectionList.includes(card.id));
    setCardsText([...tempCards]);
  };

  return (
    <CardContext.Provider
      value={{
        cardsData: cardsText,
        onUpdatedCardText: updatedCardTextHandler,
        onAddCard: addCardHandler,
        onDeleteCards: deleteCardsHandler,
        onAddToSelectionList: addToSelectionListHandler,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;
