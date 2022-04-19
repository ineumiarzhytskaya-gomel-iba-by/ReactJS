import React, { useState } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/card-slice";

import CardList from "../../components/CardList";
import Button from "../../components/UI/Button";
import AddCard from "../../components/AddCard";

const Home = () => {
  const dispatch = useDispatch();

  const [formShown, setFormShown] = useState(false);

  //form appears and dissapears when you click the button
  const showFormHandler = () => {
    setFormShown(!formShown);
  };

  return (
    <>
      <div className="actions-container">
        <Button onButtonClick={showFormHandler}>New card</Button>
        <Button
          onButtonClick={() => {
            dispatch(cardActions.onDeleteCards());
          }}
        >
          Delete selected cards
        </Button>
      </div>
      {formShown && <AddCard onFormHide={showFormHandler} />}
      <CardList />
    </>
  );
};

export default Home;
