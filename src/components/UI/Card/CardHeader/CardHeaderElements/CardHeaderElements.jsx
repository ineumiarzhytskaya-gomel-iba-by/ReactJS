import "./CardHeaderElements.css";
import React from "react";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const CardHeaderElements = (props) => {
  const [penClicked, setPenClicked] = React.useState(false); //true - edit mode
  //unsetting edit mode in view mode

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
      {!penClicked ? (
        <>
          {!props.isViewMode && <FaPen onClick={penClickHandler} />}
          {!props.isSeparatePath && (
            <input
              type="checkbox"
              onChange={(event) => {
                props.onCbChange();
              }}
              className="cb"
            ></input>
          )}
        </>
      ) : (
        <>
          <FaCheck onClick={saveClickHandler} className="fa" />
          <FaTimes onClick={cancelClickHandler} className="fa" />
        </>
      )}
    </>
  );
};

export default CardHeaderElements;
