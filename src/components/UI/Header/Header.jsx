import "./Header.css";
import { useContext } from "react";
import CardContext from "../../../store";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const ctx = useContext(CardContext);
  const location = useLocation().pathname;

  return (
    <div className="head">
      <div className="header-title">React app</div>
      <div className="cards-number">
        <div>
          {location === "/home" && (
            <>
              <span style={{ marginRight: "5px" }}>Number of cards</span>
              <span className="badge badge-light">{ctx.cardsData.length}</span>
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
