import "./CardList.css";
import Card from "./../UI/Card";
import Spinner from "../UI/Spinner";

const CardList = ({
  cardsText,
  isViewMode,
  onUpdatedCardText,
  addToSelectionList,
}) => (
  <div className="card-list">
    {cardsText.map((cardText) => (
      <Spinner key={cardText.id}>
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
      </Spinner>
    ))}
  </div>
);

export default CardList;
