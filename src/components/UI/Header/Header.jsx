import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { cardActions } from "../../../store/card-slice";
import { usersActions } from "../../../store/users-slice";

const Header = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const cardsData = useSelector((state) => state.card.cardsText);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const userEmail = useSelector((state) => state.users.email);
  const isAdmin = useSelector((state) => state.users.isAdmin);

  const onChangeSeparatePath = () => {
    const separateCard = cardsData.find((card) => card.isSeparatePath);
    separateCard &&
      dispatch(
        cardActions.changeSeparatePath({
          value: false,
          cardId: separateCard.id,
        })
      );
  };

  const linkClasses = (navData) => (navData.isActive ? "active-link" : "link");

  const headerText = isLoggedIn
    ? `Welcome, ${userEmail.split("@")[0]}!`
    : "React app";

  return (
    <div className="head">
      <div className="header-title">{headerText}</div>
      <div className="cards-number">
        <div>
          {location === "/home" && isLoggedIn && (
            <>
              <span style={{ marginRight: "5px" }}>Number of cards</span>
              <span className="badge badge-light">{cardsData.length}</span>
            </>
          )}
        </div>
        <div>
          {isAdmin && (
            <NavLink
              to="/settings"
              className={linkClasses}
              onClick={onChangeSeparatePath}
            >
              Settings
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              to="/home"
              className={linkClasses}
              onClick={onChangeSeparatePath}
            >
              Home page
            </NavLink>
          )}
          {isLoggedIn ? (
            <NavLink
              to="/sign-in"
              className={linkClasses}
              onClick={() => {
                onChangeSeparatePath();
                dispatch(usersActions.logout());
              }}
            >
              Log off
            </NavLink>
          ) : (
            <NavLink
              to="/sign-in"
              className={linkClasses}
              onClick={onChangeSeparatePath}
            >
              Sign in
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
