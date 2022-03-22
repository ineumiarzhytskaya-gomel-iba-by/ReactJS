import "./CardPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeSeparatePathAction } from "../../store/card-slice";
import Card from "../../components/UI/Card";

const CardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cardId = useLocation().pathname.split("/")[2];
  const cardsData = useSelector((state) => state.card.cardsText);
  const card = cardsData.find((card) => card.id === cardId);

  const backButtonClick = () => {
    navigate("/home");
    dispatch(changeSeparatePathAction(false, cardId));
  };

  return card ? (
    <div className="card-page-container">
      <Card id={cardId} cardText={card} isViewMode={false}></Card>
      <button className="card-page-button" onClick={backButtonClick}>
        Back
      </button>
    </div>
  ) : (
    <div className="error-page">No such card</div>
  );
};

export default CardPage;
