import "./Caption.css";
import CaptionElements from "./CaptionElements";
import React, { useState } from "react";

function Caption(props) {
  const [cbValue, setCbValue] = useState("");
  const [penClicked, setPenClicked] = useState(false);
  const [currentCaptionValue, setCurrentCaptionValue] = useState(
    props.children
  );
  const [lastCaptionValue, setLastCaptionValue] = useState(props.children);

  const cbValueHandler = (val) => {
    setCbValue(val);
    props.onCbValue(val);
  };

  const penClickedHandler = (val) => {
    setPenClicked(val);
    props.onPenClicked(val);
  };

  const saveClickHandler = () => {
    setLastCaptionValue(currentCaptionValue);
    props.onSaveClick();
  };

  const cancelClickHandler = () => {
    setCurrentCaptionValue(lastCaptionValue);
    props.onCancelClick();
  };

  function inputFinishHandler(event) {
    setCurrentCaptionValue(event.target.innerText);
  }

  return (
    <div
      className={`caption-border ${cbValue ? "dark-mode-caption-border" : ""}`}
    >
      <div
        className={`caption ${cbValue ? "dark-mode-caption" : ""}`}
        contentEditable={penClicked}
        onBlur={inputFinishHandler}
      >
        {currentCaptionValue}
      </div>
      <div>
        <CaptionElements
          onCbValue={cbValueHandler}
          onPenClicked={penClickedHandler}
          onSaveClick={saveClickHandler}
          onCancelClick={cancelClickHandler}
        ></CaptionElements>
      </div>
    </div>
  );
}

export default Caption;
