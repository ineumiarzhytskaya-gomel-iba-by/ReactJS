import React, { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import Card from "./components/UI/Card";
import Caption from "./components/UI/Caption";
import StyleChanger from "./components/StyleChanger/StyleChanger";

function App() {
  const [cbValue, setCbValue] = useState("");

  const cbValueHandler = (val) => {
    setCbValue(val);
  };

  return (
    <div>
      <Header></Header>
      <Card className={cbValue ? "dark-mode-card" : ""}>
        <Caption className={cbValue ? "dark-mode-caption" : ""}>
          Caption
          <StyleChanger onCbValue={cbValueHandler}></StyleChanger>
        </Caption>
        <div className="text">
          Building interactive user interfaces in React is fun and easy. You
          just need to describe how parts of the application interface look in
          different states. React will update them in a timely manner when the
          data changes
        </div>
      </Card>
    </div>
  );
}

export default App;
