import "./CardHeaderElements.css";
import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const StyleChanger = (props) => {
  const [cbState, setCbState] = useState(false); //false - dafault styles, true - dark mode
  const [penClicked, setPenClicked] = useState(false); //true - edit mode

  const changeHandler = (event) => {
    setCbState(event.target.checked);
    props.onCbValue(!cbState);
  };

  const penClickHandler = () => {
    setCbState(false); //set default styles in edit mode
    props.onCbValue(false);

    setPenClicked(true); //set edit mode
    props.onPenClicked(true);
  };

  const saveClickHandler = () => {
    setPenClicked(false); //unset edit mode
    props.onPenClicked(false);

    props.onSaveClick();
  };

  const cancelClickHandler = () => {
    setPenClicked(false); //unset edit mode
    props.onPenClicked(false);

    props.onCancelClick();
  };

  return (
    <div>
      {!penClicked && <FaPen onClick={penClickHandler} />}
      {!penClicked && (
        <input
          type="checkbox"
          onChange={changeHandler}
          checked={cbState}
        ></input>
      )}
      {penClicked && <FaCheck onClick={saveClickHandler} className="fa" />}
      {penClicked && <FaTimes onClick={cancelClickHandler} className="fa" />}
    </div>
  );
};

export default StyleChanger;
