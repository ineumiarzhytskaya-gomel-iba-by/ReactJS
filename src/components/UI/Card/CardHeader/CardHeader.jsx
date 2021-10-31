import "./CardHeader.css";
import CardHeaderElements from "./CardHeaderElements";
import classNames from "classnames";

function Caption(props) {
  //dark mode styles if checkbox is checked
  var captionClasses = classNames("caption", { "dark-mode-caption": props.cbValueForStyle });
  var captionBorderClasses = classNames("caption-border", {
    "dark-mode-caption-border": props.cbValueForStyle,
  });

  //passing checkbox value to the parent
  const cbValueHandler = (val) => {
    props.onCbValue(val);
  };

  //passsing edit mode to the parent
  const penClickedHandler = (val) => {
    props.onPenClicked(val);
  };

  //passing save and cancel clicks to the parent
  const saveClickHandler = () => {
    props.onSaveClick();
  };

  const cancelClickHandler = () => {
    props.onCancelClick();
  };

  //passing current text of the card header to the parent
  function inputFinishHandler(event) {
    props.onHeaderBlurHandler(event.target.innerText);
  }

  return (
    <div className={captionBorderClasses}>
      <div
        className={captionClasses}
        contentEditable={props.contentEditableHandler}
        onBlur={inputFinishHandler}
      >
        {props.children}
      </div>
      <div>
        <CardHeaderElements
          onCbValue={cbValueHandler}
          onPenClicked={penClickedHandler}
          onSaveClick={saveClickHandler}
          onCancelClick={cancelClickHandler}
        ></CardHeaderElements>
      </div>
    </div>
  );
}

export default Caption;
