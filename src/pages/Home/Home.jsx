import React, { useState } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { onDeleteCardsAction } from "../../store/card-slice";

import CardList from "../../components/CardList";
import ViewOnly from "../../components/ViewOnly";
import Button from "../../components/UI/Button";
import AddCard from "../../components/AddCard";

const Home = () => {
  const dispatch = useDispatch();

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
      <div className="actions-container">
        <ViewOnly onViewModeChange={viewModeChangeHandler}></ViewOnly>
        <Button onButtonClick={showFormHandler}>New card</Button>
        <Button
          onButtonClick={() => {
            dispatch(onDeleteCardsAction());
          }}
        >
          Delete selected cards
        </Button>
      </div>
      {formShown && <AddCard onFormHide={showFormHandler} />}
      <CardList isViewMode={viewMode}></CardList>
    </>
  );
};

export default Home;
