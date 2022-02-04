import React, { useState, useEffect } from "react";
import "./Card.css";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import classNames from "classnames";
import Spinner from "../Spinner";

const Card = ({
  id,
  cardText,
  isViewMode,
  onUpdatedCardText,
  addToSelectionList,
}) => {
  const [isSelected, setIsSelected] = useState(false); //checkbox state
  const [isEdited, setIsEdited] = useState(false); //edit mode
  //current header and body values
  const [currentValue, setCurrentValue] = useState(cardText);
  //last saved header and body values to cancel changes
  const [lastValue, setLastValue] = useState(cardText);

  //dark styles mode if checkbox is checked
  const cardClasses = classNames("card", { "dark-mode-card": isSelected });

  //unsetting edit mode and canceling changes in view mode
  if (isViewMode && isEdited) {
    setIsEdited(!isEdited);
    cancelClickHandler();
  }

  const cbChangeHandler = () => {
    if (!isEdited) {
      setIsSelected(!isSelected); //setting checkbox state
    }
  };

  //passing checkbox state and edit mode to modify the delete list
  useEffect(() => {
    addToSelectionList(id, isSelected, isEdited);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected, isEdited, id]);

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
    onUpdatedCardText(currentValue);
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
        isViewMode={isViewMode}
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
};

export default Spinner(Card);
