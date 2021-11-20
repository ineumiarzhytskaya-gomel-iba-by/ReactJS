import "./CardHeader.css";
import CardHeaderElements from "./CardHeaderElements";
import classNames from "classnames";

const CardHeader = (props) => {
  //dark mode styles if checkbox is checked
  let captionClasses = classNames("caption", {
    "dark-mode-caption": props.cbValueForStyle,
  });
  let captionBorderClasses = classNames("caption-border", {
    "dark-mode-caption-border": props.cbValueForStyle,
  });

  return (
    <div className={captionBorderClasses}>
      <div
        className={captionClasses}
        contentEditable={props.contentEditableHandler}
        onBlur={(event) => {
          props.onHeaderBlurHandler(event.target);
        }}
        id="headerText"
      >
        {props.children}
      </div>
      <div>
        <CardHeaderElements
          onCbChange={() => {
            props.onCbChange();
          }}
          onPenClick={() => {
            props.onPenClick();
          }}
          onSaveClick={() => {
            props.onSaveClick();
          }}
          onCancelClick={() => {
            props.onCancelClick();
          }}
          isViewMode={props.isViewMode}
        ></CardHeaderElements>
      </div>
    </div>
  );
}

export default CardHeader;
