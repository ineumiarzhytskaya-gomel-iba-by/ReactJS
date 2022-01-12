import "./CardList.css";
import Card from "./../UI/Card/Card";

const CardList = (props) => {
  //don't show cards where isDeleted property is true
  const notDeletedCards = props.cardsText.filter((cardText) => {
    return !cardText.isDeleted;
  });

  return notDeletedCards.map((cardText) => (
    <Card
      key={cardText.id}
      id={cardText.id}
      cardText={cardText}
      className="card"
      isViewMode={props.isViewMode}
      onUpdatedCardText={(cardText) => {
        props.onUpdatedCardText(cardText);
      }}
      addToDeleteList={(cardId, isSelected, isEdited) =>
        props.addToDeleteList(cardId, isSelected, isEdited)
      }
    ></Card>
  ));
};

export default CardList;
