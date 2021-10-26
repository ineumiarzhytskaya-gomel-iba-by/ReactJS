import "./Caption.css";
import CaptionElements from "./CaptionElements";
import React, { useState } from "react";

function Caption(props) {
  const [cbValue, setCbValue] = useState(""); //checkbox state
  const [penClicked, setPenClicked] = useState(false);
  //current caption value
  const [currentCaptionValue, setCurrentCaptionValue] = useState("Caption");
  //last saved caption value to cancel changes
  const [lastCaptionValue, setLastCaptionValue] = useState("Caption");

  var classNames = require("classnames");
  //dark mode styles if checkbox is checked
  var captionClasses = classNames("caption", { "dark-mode-caption": cbValue });
  var captionBorderClasses = classNames("caption-border", {
    "dark-mode-caption-border": cbValue,
  });

  const cbValueHandler = (val) => {
    setCbValue(val);
    props.onCbValue(val);
  };

  //making caption editable in edit mode
  const penClickedHandler = (val) => {
    setPenClicked(val);
    props.onPenClicked(val);
  };

  //updating last saved caption value
  const saveClickHandler = () => {
    setLastCaptionValue(currentCaptionValue);
    props.onSaveClick(); //passing save click to the parent
  };

  //setting caption value lo last saved
  const cancelClickHandler = () => {
    setCurrentCaptionValue(lastCaptionValue);
    props.onCancelClick(); //passing cancel click to the parent
  };

  //updating current caption value
  function inputFinishHandler(event) {
    setCurrentCaptionValue(event.target.innerText);
  }

  return (
    <div className={captionBorderClasses}>
      <div
        className={captionClasses}
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
