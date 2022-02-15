import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const CardContext = React.createContext({
  cardsData: [],
  onUpdatedCardText: (currentValue) => {},
  onAddCard: (cardHeader, cardBody) => {},
  onDeleteCards: () => {},
  onAddToSelectionList: (cardId, isSelected, isEdited) => {},
  errorMessage: null,
});

export const CardContextProvider = (props) => {
  const ctx = useContext(CardContext);

  const [cardsText, setCardsText] = useState(ctx.cardsData);
  const [selectionList, setSelectionList] = useState([]); //array with ids of selected cards
  const [errorMessage, setErrorMessage] = useState(null);

  React.useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      )
      .then((response) => {
        const respData = response.data.slice(0, 15).map((data) => {
          return {
            id: uuidv4(),
            headerText: data.Name,
            bodyText: data.About,
          };
        });
        setCardsText(respData);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, []);

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
        errorMessage: errorMessage,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;
