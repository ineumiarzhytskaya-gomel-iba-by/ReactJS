import "./App.css";
import Header from "./components/UI/Header";
import Card from "./components/UI/Card/Card";

function App() {
  var cardText = {
    headerText: "Caption",
    bodyText: `Building interactive user interfaces in React is fun and easy. You
    just need to describe how parts of the application interface look in
    different states. React will update them in a timely manner when the
    data changes`,
  };

  return (
    <>
      <Header></Header>
      <Card CardText={cardText}></Card>
    </>
  );
}

export default App;
