import React, { useState } from "react";
import "./Card.css";
import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";
import classNames from "classnames";

function Card(props) {
  const [cbValue, setCbValue] = useState(""); //checkbox state
  const [penClicked, setPenClicked] = useState(false); //true - card body is content editable
  //current header and body values
  const [currentValue, setCurrentValue] = useState(props.CardText);
  //last saved header and body values to cancel changes
  const [lastValue, setLastValue] = useState(props.CardText);

  //dark styles mode if checkbox is checked
  const cardClasses = classNames("card", { "dark-mode-card": cbValue });

  const cbValueHandler = (val) => {
    setCbValue(val); //setting checkbox state
  };

  const penClickedHandler = (val) => {
    setPenClicked(val); //setting/unsetting edit mode
  };

  //updating header and body last saved values
  const saveClickHander = () => {
    setLastValue({
      ...currentValue,
    });
  };

  //setting header and body values to last saved
  const cancelClickHandler = () => {
    setCurrentValue({
      ...lastValue,
    });
  };

  //updating current header and body values
  //setting to passed from the child
  const bodyInputFinishHandler = (val) => {
    setCurrentValue({
      ...currentValue,
      bodyText: val,
    });
  };

  const headerInputFinishHandler = (val) => {
    setCurrentValue({
      ...currentValue,
      headerText: val,
    });
  };

  return (
    <div className={cardClasses}>
      <CardHeader
        onCbValue={cbValueHandler}
        onPenClicked={penClickedHandler}
        onSaveClick={saveClickHander}
        onCancelClick={cancelClickHandler}
        contentEditableHandler={penClicked}
        cbValueForStyle={cbValue}
        onHeaderBlurHandler={headerInputFinishHandler}
      >
        {currentValue.headerText}
      </CardHeader>
      <CardBody
        contentEditableHandler={penClicked}
        onBodyBlurHandler={bodyInputFinishHandler}
      >
        {currentValue.bodyText}
      </CardBody>
    </div>
  );
}

export default Card;
