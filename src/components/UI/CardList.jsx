import "./CardList.css";
import Card from "./Card/Card";

const CardList = (props) => {
  //passing new card data to the parent
  const updatedCardTextHandler = (cardText) => {
    props.onUpdatedCardText(cardText);
  };

  return (
    <>
      {props.cardsText.map((cardText) => {
        return (
          <Card
            key={cardText.id}
            cardText={cardText}
            className="card"
            isViewMode={props.isViewMode}
            onUpdatedCardText={updatedCardTextHandler}
          ></Card>
        );
      })}
    </>
  );
};

export default CardList;
