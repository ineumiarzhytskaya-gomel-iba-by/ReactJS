import "./CardList.css";
import Card from "./../UI/Card";

const CardList = ({
  cardsText,
  isViewMode,
  onUpdatedCardText,
  addToSelectionList,
}) => (
  <div className="card-list">
    {cardsText.map((cardText) => (
      <Card
        key={cardText.id}
        id={cardText.id}
        cardText={cardText}
        isViewMode={isViewMode}
        onUpdatedCardText={(cardText) => {
          onUpdatedCardText(cardText);
        }}
        addToSelectionList={(cardId, isSelected, isEdited) =>
          addToSelectionList(cardId, isSelected, isEdited)
        }
      ></Card>
    ))}
  </div>
);

export default CardList;
