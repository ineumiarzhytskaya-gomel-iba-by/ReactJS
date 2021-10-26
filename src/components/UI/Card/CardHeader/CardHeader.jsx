import Caption from "../../../Caption/Caption";
import "./CardHeader.css";

const CardHeader = (props) => {
  //passing checkbox value to the parent
  const cbValueHandler = (val) => {
    props.onCbValue(val);
  };

  //passing edit mode to the parent
  const penClickedHandler = (val) => {
    props.onPenClicked(val);
  };

  //passing save and cancel clicks to the parent
  const saveClickHander = () => {
    props.onSaveClick();
  };

  const cancelClickHandler = () => {
    props.onCancelClick();
  };

  return (
    <div>
      <Caption
        onCbValue={cbValueHandler}
        onPenClicked={penClickedHandler}
        onSaveClick={saveClickHander}
        onCancelClick={cancelClickHandler}
      ></Caption>
    </div>
  );
};

export default CardHeader;
