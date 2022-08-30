import { PulseLoader } from "react-spinners";
import "./Fallback.css";

const Fallback = () => (
  <div className="fallback">
    <PulseLoader color="rgb(34, 4, 116)" size={20} margin={7}></PulseLoader>
  </div>
);

export default Fallback;
