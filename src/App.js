import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

/* Components */
import { Home, Login, Navigation, ProtectedRoute } from "./component map/ComponentMap"
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'

import store from "./store/index"

function App() {
  /* const store = const dispatch = useDispatch(function)() */
  console.log(store.getState());
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
