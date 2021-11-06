import "./CardHeaderElements.css";
import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const StyleChanger = (props) => {
  const [penClicked, setPenClicked] = useState(false); //true - edit mode


  const changeHandler = (event) => {
    props.onCbChange(); //passing checkbox value change to the parent
  };

  const penClickHandler = () => {
    props.onCbChange();

    setPenClicked(true); //set edit mode
    props.onPenClick(); //passing edit mode change
  };

  const saveClickHandler = () => {
    setPenClicked(false); //unset edit mode
    props.onPenClick();

    props.onSaveClick();
  };

  const cancelClickHandler = () => {
    setPenClicked(false); //unset edit mode
    props.onPenClick();

    props.onCancelClick();
  };

  return (
    <>
      {!penClicked && (
        <>
          <FaPen onClick={penClickHandler} />
          <input
            type="checkbox"
            onChange={changeHandler}
          ></input>
        </>
      )}
      {penClicked && (
        <>
          <FaCheck onClick={saveClickHandler} className="fa" />
          <FaTimes onClick={cancelClickHandler} className="fa" />
        </>
      )}
    </>
  );
};

export default StyleChanger;
