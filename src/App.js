import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* Components */
import { Home } from "./component map/ComponentMap"

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
