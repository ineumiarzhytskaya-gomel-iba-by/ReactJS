import React, { useState } from "react";
import "./Card.css";
import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";

function Card(props) {
  const classes = "card " + props.className;

  var text = `Building interactive user interfaces in React is fun and easy. You
  just need to describe how parts of the application interface look in
  different states. React will update them in a timely manner when the
  data changes`;

  const [cbValue, setCbValue] = useState(""); //checkbox state
  const [penClicked, setPenClicked] = useState(false); //true - card body is content editable
  //current body text value
  const [currentTextValue, setCurrentTextValue] = useState(text);
  //last saved body text value to cancel changes
  const [lastTextValue, setLastTextValue] = useState(text);

  const classNames = require("classnames");
  //dark styles mode if checkbox is checked
  const cardClasses = classNames(classes, { "dark-mode-card": cbValue });

  //setting checkbox state
  const cbValueHandler = (val) => {
    setCbValue(val);
  };

  const penClickedHandler = (val) => {
    setPenClicked(val); //setting/unsetting edit mode
  };

  //updating last saved body text value
  const saveClickHander = () => {
    setLastTextValue(currentTextValue);
  };

  //setting body text value to last saved
  const cancelClickHandler = () => {
    setCurrentTextValue(lastTextValue);
  };

  //updating current body text value
  //setting to passed from the child
  const inputFinishHandler = (event) => {
    setCurrentTextValue(event);
  };

  return (
    <div className={cardClasses}>
      <CardHeader
        onCbValue={cbValueHandler}
        onPenClicked={penClickedHandler}
        onSaveClick={saveClickHander}
        onCancelClick={cancelClickHandler}
      ></CardHeader>
      <CardBody contentEditable={penClicked} onBlur={inputFinishHandler}>
        {currentTextValue}
      </CardBody>
    </div>
  );
}

export default Card;
