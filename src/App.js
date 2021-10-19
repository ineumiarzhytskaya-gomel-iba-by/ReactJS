import React, { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Card from "./components/UI/Card";
import Caption from "./components/Caption/Caption";

function App() {
  var text = `Building interactive user interfaces in React is fun and easy. You
  just need to describe how parts of the application interface look in
  different states. React will update them in a timely manner when the
  data changes`;

  const [cbValue, setCbValue] = useState("");
  const [penClicked, setPenClicked] = useState(false);
  const [currentTextValue, setCurrentTextValue] = useState(text);
  const [lastTextValue, setLastTextValue] = useState(text);

  const cbValueHandler = (val) => {
    setCbValue(val);
  };

  const penClickedHandler = (val) => {
    setPenClicked(val);
  };

  const saveClickHander = () => {
    setLastTextValue(currentTextValue);
  };

  const cancelClickHandler = () => {
    setCurrentTextValue(lastTextValue);
  };

  const inputFinishHandler = (event) => {
    setCurrentTextValue(event.target.innerText);
  };

  return (
    <div>
      <Header></Header>
      <Card className={cbValue ? "dark-mode-card" : ""}>
        <Caption
          onCbValue={cbValueHandler}
          onPenClicked={penClickedHandler}
          onSaveClick={saveClickHander}
          onCancelClick={cancelClickHandler}
        >
          Caption
        </Caption>
        <div
          className="text"
          contentEditable={penClicked}
          onBlur={inputFinishHandler}
        >
          {currentTextValue}
        </div>
      </Card>
    </div>
  );
}

export default App;
