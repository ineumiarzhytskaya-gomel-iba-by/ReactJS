import "./CardPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { cardActions } from "../../store/card-slice";

const CardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cardId = useLocation().pathname.split("/")[2];
  const cardsData = useSelector((state) => state.card.cardsText);
  const card = cardsData.find((card) => card.id === cardId);

  const cardHeaderRef = useRef();
  const cardBodyRef = useRef();

  const saveCardData = () => {
    dispatch(
      cardActions.onUpdatedCardText({
        card: {
          id: cardId,
          headerText: cardHeaderRef.current.innerHTML,
          bodyText: cardBodyRef.current.innerHTML,
        },
      })
    );
    navigate("/home");
  };

  return card ? (
    <div className="card-page-container">
      <div className="card-page">
        <div className="card-page-caption" contentEditable ref={cardHeaderRef}>
          {card.headerText}
        </div>
        <div className="card-page-text" contentEditable ref={cardBodyRef}>
          {card.bodyText}
        </div>
      </div>
      <button className="save-button" onClick={saveCardData}>
        Save
      </button>
    </div>
  ) : (
    <div className="error-page">No such card</div>
  );
};

export default CardPage;
