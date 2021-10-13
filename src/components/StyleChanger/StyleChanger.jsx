import "./StyleChanger.css";
import React, { useState } from "react";

const StyleChanger = (props) => {
  const [cbState, setCbState] = useState(false);

  const changeHandler = (event) => {
    setCbState(event.target.checked);
    props.onCbValue(!cbState);
  };

  return (
    <input
      type="checkbox"
      onChange={changeHandler}
      checked={cbState}
      className="style-changer"
    ></input>
  );
};

export default StyleChanger;
