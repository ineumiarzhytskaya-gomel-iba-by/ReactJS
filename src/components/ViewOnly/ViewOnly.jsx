import styled from "styled-components";

const ViewLabel = styled.label`
  font-size: 25px;
  color: rgb(20, 4, 66);
  font-weight: bold;
  margin-right: 10px;
`;

const ViewOnly = styled.div`
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  background: rgb(230, 228, 235);
  &:hover{
    background: rgb(216, 210, 230);
  }
  transition: background 0.3s;
  margin-top: 10px;
  width: 175px;
  padding-bottom: 1px;
  padding-left: 20px;
`;

const viewOnlyExport = (props) => (
  <ViewOnly>
    <ViewLabel htmlFor="viewMode">View only </ViewLabel>
    <input
      type="checkbox"
      id="viewMode"
      onChange={() => {
        props.onViewModeChange();
      }}
    ></input>
  </ViewOnly>
);

export default viewOnlyExport;
