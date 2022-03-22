import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { changeSeparatePathAction } from "../../../store/card-slice";

const Header = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const cardsData = useSelector((state) => state.card.cardsText);

  const onChangeSeparatePath = () => {
    const separateCard = cardsData.find((card) => card.isSeparatePath);
    separateCard && dispatch(changeSeparatePathAction(false, separateCard.id));
  };

  return (
    <div className="head">
      <div className="header-title">React app</div>
      <div className="cards-number">
        <div>
          {location === "/home" && (
            <>
              <span style={{ marginRight: "5px" }}>Number of cards</span>
              <span className="badge badge-light">{cardsData.length}</span>
            </>
          )}
        </div>
        <div>
          <NavLink
            to="/home"
            className={(navData) => (navData.isActive ? "active-link" : "link")}
            onClick={onChangeSeparatePath}
          >
            Home page
          </NavLink>
          <NavLink
            to="/sign-in"
            className={(navData) => (navData.isActive ? "active-link" : "link")}
            onClick={onChangeSeparatePath}
          >
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
