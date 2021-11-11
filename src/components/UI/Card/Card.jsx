import React, { useState } from "react";
import "./Card.css";
import CardBody from "./CardBody/CardBody";
import CardHeader from "./CardHeader/CardHeader";
import classNames from "classnames";

function Card(props) {
  const [isSelected, setIsSelected] = useState(false); //checkbox state
  const [isEdited, setIsEdited] = useState(false); //edit mode
  //current header and body values
  const [currentValue, setCurrentValue] = useState(props.cardText);
  //last saved header and body values to cancel changes
  const [lastValue, setLastValue] = useState(props.cardText);

  //dark styles mode if checkbox is checked
  const cardClasses = classNames("card", { "dark-mode-card": isSelected });

  //unsetting edit mode and canceling changes in view mode
  if (props.isViewMode) {
    if (isEdited) {
      setIsEdited(!isEdited);
      cancelClickHandler();
    }
  }

  const cbChangeHandler = () => {
    if (!isEdited) {
      setIsSelected(!isSelected); //setting checkbox state
    }
  };

  const penClickHandler = () => {
    setIsEdited(!isEdited); //setting/unsetting edit mode
    setIsSelected(false); //unchecking checkbox
  };

  //updating header and body last saved values
  const saveClickHander = () => {
    setLastValue({
      ...currentValue,
    });

    //passing new card data to the parent
    props.onUpdatedCardText(currentValue);
  };

  //setting header and body values to last saved
  function cancelClickHandler() {
    setCurrentValue({
      ...lastValue,
    });
  }

  //updating current header and body values
  //setting to passed from the child
  const inputFinishHandler = (elem) => {
    setCurrentValue({
      ...currentValue,
      [elem.id]: elem.innerText,
    });
  };

  return (
    <div className={cardClasses}>
      <CardHeader
        onCbChange={cbChangeHandler}
        onPenClick={penClickHandler}
        onSaveClick={saveClickHander}
        onCancelClick={cancelClickHandler}
        contentEditableHandler={isEdited}
        cbValueForStyle={isSelected}
        onHeaderBlurHandler={inputFinishHandler}
        isViewMode={props.isViewMode}
      >
        {currentValue.headerText}
      </CardHeader>
      <CardBody
        contentEditableHandler={isEdited}
        onBodyBlurHandler={inputFinishHandler}
      >
        {currentValue.bodyText}
      </CardBody>
    </div>
  );
}

export default Card;
