import "./ViewOnly.css";

const ViewOnly = (props) => {
  //passing view mode to the parent
  const viewModeHandler = () => {
    props.onViewModeChange();
  };

  return (
    <div className="block">
      <label htmlFor="viewMode">View only </label>
      <input type="checkbox" id="viewMode" onChange={viewModeHandler}></input>
    </div>
  );
};

export default ViewOnly;
