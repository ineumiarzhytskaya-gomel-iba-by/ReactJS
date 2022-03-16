import "./CardPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../components/UI/Card";

const CardPage = () => {
  const navigate = useNavigate();

  const cardId = useLocation().pathname.split("/")[2];
  const cardsData = useSelector((state) => state.card.cardsText);
  const card = cardsData.find((card) => card.id === cardId);

  return card ? (
    <div className="card-page-container">
      <Card id={cardId} cardText={card} isViewMode={false}></Card>
      <button className="card-page-button" onClick={() => navigate("/home")}>
        Back
      </button>
    </div>
  ) : (
    <div className="error-page">No such card</div>
  );
};

export default CardPage;
