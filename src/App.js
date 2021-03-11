import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
