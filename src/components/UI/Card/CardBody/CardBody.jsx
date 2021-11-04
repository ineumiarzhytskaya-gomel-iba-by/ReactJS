import "./CardBody.css";
import React from "react";

const CardBody = (props) => {
  //passing current text of the card body to the parent
  const inputFinishHandler = (event) => {
    props.onBodyBlurHandler(event.target);
  };

  return (
    <div
      className="text"
      contentEditable={props.contentEditableHandler}
      onBlur={inputFinishHandler}
      id="bodyText"
    >
      {props.children}
    </div>
  );
};

export default CardBody;
