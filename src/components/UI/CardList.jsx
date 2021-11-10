import "./CardList.css";
import Card from "./Card/Card";

const CardList = (props) => {
  return (
    <>
      {props.cardsText.map((cardText) => {
        return (
          <Card
            key={cardText.id}
            cardText={cardText}
            className="card"
            isViewMode={props.isViewMode}
          ></Card>
        );
      })}
    </>
  );
};

export default CardList;
