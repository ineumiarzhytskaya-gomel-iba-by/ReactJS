import Header from './components/Header';
import Card from './components/Card';
import Caption from './components/Caption';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Card>
        <Caption>Caption</Caption>
        <div className="text">
          Building interactive user interfaces in React is fun and easy. You
          just need to describe how parts of the application interface look in
          different states. React will update them in a timely manner when the
          data changes
        </div>
      </Card>
    </div>
  );
}

export default App;
