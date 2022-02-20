import "./Header.css";
import { useContext } from "react";
import CardContext from "../../../store";
import { NavLink, Routes, Route } from "react-router-dom";

const Header = () => {
  const ctx = useContext(CardContext);

  return (
    <div className="head">
      <div className="header-title">React app</div>
      <div className="cards-number">
        <div>
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <span style={{ marginRight: "5px" }}>Number of cards</span>
                  <span className="badge badge-light">
                    {ctx.cardsData.length}
                  </span>
                </>
              }
            />
          </Routes>
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
