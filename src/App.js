import React, { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header";
import CardList from "./components/UI/CardList";
import ViewOnly from "./components/UI/ViewOnly";

function App() {
  //view mode if view checbox is checked
  const [viewMode, setViewMode] = useState(false);

  //setting/unsetting view mode
  const viewModeChangeHandler = () => {
    setViewMode(!viewMode);
  };

  return (
    <>
      <Header></Header>
      <ViewOnly onViewModeChange={viewModeChangeHandler}></ViewOnly>
      <CardList isViewMode={viewMode}></CardList>
    </>
  );
}

export default App;
