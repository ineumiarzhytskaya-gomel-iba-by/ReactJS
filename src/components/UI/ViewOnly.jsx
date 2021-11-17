import "./ViewOnly.css";

const ViewOnly = (props) => (
    <div className="block">
      <label htmlFor="viewMode">View only </label>
      <input
        type="checkbox"
        id="viewMode"
        onChange={() => {
          props.onViewModeChange();
        }}
      ></input>
    </div>
  );

export default ViewOnly;
