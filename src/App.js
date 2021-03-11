import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* Components */
import { Home, Navigation } from "./component map/ComponentMap"
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
