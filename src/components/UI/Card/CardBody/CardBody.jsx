import "./CardBody.css";
import React from "react";

const CardBody = (props) => (
  <div
    className="text"
    contentEditable={props.contentEditableHandler}
    onBlur={(event) => {
      props.onBodyBlurHandler(event.target);
    }}
    id="bodyText"
  >
    {props.children}
  </div>
);

export default CardBody;
