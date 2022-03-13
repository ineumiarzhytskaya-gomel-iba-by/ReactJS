import "./CardList.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { cardActions } from "../../store/card-slice";
import axios from "axios";

import Card from "./../UI/Card";
let isInitial = true;

const CardList = ({ isViewMode }) => {
  const dispatch = useDispatch();

  const cardsData = useSelector((state) => state.card.cardsText);
  const errorMessage = useSelector((state) => state.card.errorMessage);

  if (isInitial) {
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
        dispatch(cardActions.getInitialCards({ initialCards: respData }));
      })
      .catch((error) => {
        dispatch(cardActions.setErrorMessage({ errorMessage: error.message }));
      });
    isInitial = false;
  }

  return errorMessage ? (
    <div className="error-message">{errorMessage}</div>
  ) : (
    <div className="card-list">
      {cardsData.map((cardText) => (
        <Card
          key={cardText.id}
          id={cardText.id}
          cardText={cardText}
          isViewMode={isViewMode}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;
