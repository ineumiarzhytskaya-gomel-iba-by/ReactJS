import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    cardsText: [],
    selectionList: [],
    errorMessage: null,
  },
  reducers: {
    onUpdatedCardText(state, action) {
      //updating data of the cards list
      //finding index of changed card in the array of cards
      const card = action.payload.card;

      const newCardId = state.cardsText.findIndex(
        (cardText) => cardText.id === card.id
      );

      //Updating text of the changed card
      state.cardsText[newCardId] = card;
    },
    onAddCard(state, action) {
      //adding new card
      const payload = action.payload;

      state.cardsText.push({
        id: uuidv4(),
        headerText: payload.cardHeader,
        bodyText: payload.cardBody,
        isSeparatePath: false,
      });
    },
    onDeleteCards(state) {
      let tempCards = state.cardsText.filter(
        (card) => !state.selectionList.includes(card.id)
      );
      state.cardsText = tempCards;
    },
    onAddToSelectionList(state, action) {
      //adding selected cards to the list
      const payload = action.payload;

      if (payload.isSelected && !payload.isEdited) {
        state.selectionList.push(payload.cardId);
        //deleting cards from the list if they were unselected
      } else if (!payload.isSelected) {
        let index = state.selectionList.indexOf(payload.cardId);

        if (index !== -1) {
          state.selectionList.splice(index, 1);
        }
      }
    },
    getInitialCards(state, action) {
      state.cardsText = action.payload.initialCards;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload.errorMessage;
    },
    changeSeparatePath(state, action) {
      let index = state.cardsText.findIndex(
        (card) => card.id === action.payload.cardId
      );
      state.cardsText[index].isSeparatePath = action.payload.value;
    },
  },
});

export const getInitialCardsAction = () => {
  return (dispatch) => {
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
            isSeparatePath: false,
          };
        });
        dispatch(cardSlice.actions.getInitialCards({ initialCards: respData }));
      })
      .catch((error) => {
        dispatch(
          cardSlice.actions.setErrorMessage({ errorMessage: error.message })
        );
      });
  };
};

export const cardActions = cardSlice.actions;

export default cardSlice;
