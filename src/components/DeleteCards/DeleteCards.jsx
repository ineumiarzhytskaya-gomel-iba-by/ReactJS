import styled from "styled-components";

const DeleteButton = styled.button`
  font-size: 20px;
  height: 45px;
  margin-top: 10px;
  font-weight: bold;
  color: rgb(20, 4, 66);
  background: rgb(230, 228, 235);
  &:hover {
    background: rgb(216, 210, 230);
  }
  transition: background 0.3s;
  border: none;
  border-radius: 7px;
  box-shadow: 1px 1px 3px 1px rgb(20, 4, 66, 0.3);
  padding: 0px 10px 0px 10px;
`;

const DeleteCards = (props) => (
  <DeleteButton onClick={() => props.onDeleteCards()}>
    Delete selected cards
  </DeleteButton>
);

export default DeleteCards;
