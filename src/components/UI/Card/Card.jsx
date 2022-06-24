import React, { useEffect } from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../../store/card-slice";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import Spinner from "../Spinner";

const Card = ({ id, cardText, isViewMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSelected, setIsSelected] = React.useState(false); //checkbox state
  const [isEdited, setIsEdited] = React.useState(false); //edit mode
  //current header and body values
  const [currentValue, setCurrentValue] = React.useState(cardText);
  //last saved header and body values to cancel changes
  const [lastValue, setLastValue] = React.useState(cardText);

  //dark styles mode if checkbox is checked
  const cardClasses = classNames("card", { "dark-mode-card": isSelected });

  const cbChangeHandler = () => {
    if (!isEdited) {
      setIsSelected(!isSelected); //setting checkbox state
    }
  };

  //passing checkbox state and edit mode to modify the delete list
  useEffect(() => {
    dispatch(
      cardActions.onAddToSelectionList({
        cardId: id,
        isSelected: isSelected,
        isEdited: isEdited,
      })
    );
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

    dispatch(cardActions.onUpdatedCardText({ card: currentValue }));
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

  const openCardPage = () => {
    if (!isEdited && !isViewMode) {
      navigate(`/card/${id}`);
      dispatch(cardActions.changeSeparatePath({ value: true, cardId: id }));
    }
  };

  return (
    <div className={cardClasses} onDoubleClick={openCardPage}>
      <CardHeader
        onCbChange={cbChangeHandler}
        onPenClick={penClickHandler}
        onSaveClick={saveClickHander}
        onCancelClick={cancelClickHandler}
        contentEditableHandler={isEdited}
        cbValueForStyle={isSelected}
        onHeaderBlurHandler={inputFinishHandler}
        isViewMode={isViewMode}
        isSeparatePath={cardText.isSeparatePath}
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

Card.propTypes = {
  id: PropTypes.string,
  cardText: PropTypes.object,
  isViewMode: PropTypes.bool,
};

export default Spinner(Card);

export { Card };
