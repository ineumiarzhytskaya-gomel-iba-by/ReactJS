import "./CardList.css";
import { useSelector } from "react-redux";

import Card from "./../UI/Card";

const CardList = ({ isViewMode }) => {
  const cardsData = useSelector((state) => state.card.cardsText);
  const errorMessage = useSelector((state) => state.card.errorMessage);

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
