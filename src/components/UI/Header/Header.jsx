import "./Header.css";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  const cardsData = useSelector((state) => state.card.cardsText);

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
          >
            Home page
          </NavLink>
          <NavLink
            to="/sign-in"
            className={(navData) => (navData.isActive ? "active-link" : "link")}
          >
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
