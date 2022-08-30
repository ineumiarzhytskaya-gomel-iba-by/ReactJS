import React, { useState } from "react";
import "./Home.css";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/card-slice";
import usePrompt from "../../hooks/usePrompt.js";

import CardList from "../../components/CardList";
import Button from "../../components/UI/Button";
import AddCard from "../../components/AddCard";

const Home = () => {
  const dispatch = useDispatch();

  const [formShown, setFormShown] = useState(false);

  console.log(
    usePrompt(10000, "Write something and it will be printed to the console")
  );

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
