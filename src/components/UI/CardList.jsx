import "./CardList.css";
import Card from "./Card/Card";

const CardList = (props) =>
  props.cardsText.map((cardText) => (
    <Card
      key={cardText.id}
      cardText={cardText}
      className="card"
      isViewMode={props.isViewMode}
      onUpdatedCardText={(cardText) => {
        props.onUpdatedCardText(cardText);
      }}
    ></Card>
  ));

export default CardList;
