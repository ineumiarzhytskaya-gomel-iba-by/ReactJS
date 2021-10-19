import "./CaptionElements.css";
import React, { useState } from "react";
import { FaPen } from "react-icons/fa";

const StyleChanger = (props) => {
  const [cbState, setCbState] = useState(false);
  const [penClicked, setPenClicked] = useState(false);

  const changeHandler = (event) => {
    setCbState(event.target.checked);
    props.onCbValue(!cbState);
  };

  const penClickHandler = () => {
    setCbState(false);
    props.onCbValue(false);

    setPenClicked(true);
    props.onPenClicked(true);
  };

  const saveClickHandler = () => {
    setPenClicked(false);
    props.onPenClicked(false);

    props.onSaveClick();
  };

  const cancelClickHandler = () => {
    setPenClicked(false);
    props.onPenClicked(false);

    props.onCancelClick();
  };

  return (
    <div>
      <FaPen
        onClick={penClickHandler}
        className={penClicked ? "no-display" : ""}
      />
      <input
        type="checkbox"
        onChange={changeHandler}
        checked={cbState}
        className={penClicked ? "no-display" : ""}
      ></input>
      <button
        onClick={saveClickHandler}
        className={penClicked ? "" : "no-display"}
      >
        Save
      </button>
      <button
        onClick={cancelClickHandler}
        className={penClicked ? "" : "no-display"}
      >
        Cancel
      </button>
    </div>
  );
};

export default StyleChanger;
