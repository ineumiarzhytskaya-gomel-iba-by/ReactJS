import "./CardList.css";
import CardContext from "../../store";
import { useContext } from "react";

import Card from "./../UI/Card";

const CardList = ({ isViewMode }) => {
  const ctx = useContext(CardContext);

  return ctx.errorMessage ? (
    <div className="error-message">{ctx.errorMessage}</div>
  ) : (
    <div className="card-list">
      {ctx.cardsData.map((cardText) => (
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
