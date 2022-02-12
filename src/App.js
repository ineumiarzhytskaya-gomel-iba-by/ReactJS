import React, { useState, useContext } from "react";
import "./App.css";
import CardContext from "./store";

import Header from "./components/UI/Header";
import CardList from "./components/CardList";
import ViewOnly from "./components/ViewOnly";
import Button from "./components/UI/Button";
import AddCard from "./components/AddCard/AddCard";

function App() {
  const ctx = useContext(CardContext);

  const [formShown, setFormShown] = useState(false);
  //view mode if view checbox is checked
  const [viewMode, setViewMode] = useState(false);

  //setting/unsetting view mode
  const viewModeChangeHandler = () => {
    setViewMode(!viewMode);
  };

  //form appears and dissapears when you click the button
  const showFormHandler = () => {
    setFormShown(!formShown);
  };

  return (
    <>
      <Header></Header>
      <div className="actions-container">
        <ViewOnly onViewModeChange={viewModeChangeHandler}></ViewOnly>
        <Button onButtonClick={showFormHandler}>New card</Button>
        <Button onButtonClick={ctx.onDeleteCards}>Delete selected cards</Button>
      </div>
      {formShown && <AddCard onFormHide={showFormHandler} />}
      <CardList isViewMode={viewMode}></CardList>
    </>
  );
}

export default App;
