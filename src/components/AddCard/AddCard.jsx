import "./AddCard.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/card-slice";

const AddCard = (props) => {
  const dispatch = useDispatch();

  //refs for card body and header inputs
  const cardHeaderRef = useRef();
  const cardBodyRef = useRef();

  const addCardHandler = (event) => {
    event.preventDefault();

    const cardHeader = cardHeaderRef.current.value;
    const cardBody = cardBodyRef.current.value;
    dispatch(
      cardActions.onAddCard({ cardHeader: cardHeader, cardBody: cardBody })
    );
    dispatch(cardActions.setErrorMessage({ errorMessage: null }));
    props.onFormHide();
  };

  return (
    <form onSubmit={addCardHandler} className="add-card-form">
      <label htmlFor="header">Card header</label>
      <input id="header" type="text" className="input" ref={cardHeaderRef} />
      <label htmlFor="body">Card body</label>
      <textarea id="body" className="input" rows="5" ref={cardBodyRef} />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default AddCard;
