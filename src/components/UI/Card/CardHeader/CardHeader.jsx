import "./CardHeader.css";
import CardHeaderElements from "./CardHeaderElements";
import classNames from "classnames";

function Caption(props) {
  //dark mode styles if checkbox is checked
  var captionClasses = classNames("caption", {
    "dark-mode-caption": props.cbValueForStyle,
  });
  var captionBorderClasses = classNames("caption-border", {
    "dark-mode-caption-border": props.cbValueForStyle,
  });

  //passing checkbox value change to the parent
  const cbChangeHandler = () => {
    props.onCbChange();
  };

  //passsing edit mode change to the parent
  const penClickHandler = () => {
    props.onPenClick();
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
    props.onHeaderBlurHandler(event.target);
  }

  return (
    <div className={captionBorderClasses}>
      <div
        className={captionClasses}
        contentEditable={props.contentEditableHandler}
        onBlur={inputFinishHandler}
        id="headerText"
      >
        {props.children}
      </div>
      <div>
        <CardHeaderElements
          onCbChange={cbChangeHandler}
          onPenClick={penClickHandler}
          onSaveClick={saveClickHandler}
          onCancelClick={cancelClickHandler}
          isViewMode={props.isViewMode}
        ></CardHeaderElements>
      </div>
    </div>
  );
}

export default Caption;
