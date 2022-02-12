import "./Header.css";
import { useContext } from "react";
import CardContext from "../../../store";

const Header = () => {
  const ctx = useContext(CardContext);

  return (
    <div className="head">
      <div className="header-title">Header</div>
      <div className="cards-number">
        <div style={{marginRight: "5px"}}>Number of cards</div>
        <span className="badge badge-light">{ctx.cardsData.length}</span>
      </div>
    </div>
  );
};

export default Header;
