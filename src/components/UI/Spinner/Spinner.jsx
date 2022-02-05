import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import "./Spinner.css";

const spinner = (Component) => props => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  }, []);

  return showSpinner ? (
    <div className="spinner-card">
        <PulseLoader color="rgb(34, 4, 116)" size={20} margin={7}></PulseLoader>
    </div>
  ) : (
    <Component {...props}/>
  );
};

export default spinner;
