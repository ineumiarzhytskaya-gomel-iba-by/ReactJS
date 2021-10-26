import "./CardBody.css";

const CardBody = (props) => {
  //passing current text of the card body to the parent
  const inputFinishHandler = (event) => {
    props.onBlur(event.target.innerText);
  };

  return (
    <div
      className="text"
      contentEditable={props.contentEditable}
      onBlur={inputFinishHandler}
    >
      {props.children}
    </div>
  );
};

export default CardBody;
