import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
/* Redux */
/* import { useDispatch } from "react-redux" */
/* import { increment } from "./store/index" */
/* import store from "./store/index" */
/* Components */
import { Home, Login, Navigation, ProtectedRoute } from "./component map/ComponentMap"
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path='/contact' />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
