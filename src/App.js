import {
  Router, Switch, Route
} from "react-router-dom";

/* Components */
import { Home, Login, Navigation, ProtectedRoute, Register, ForgotPassword } from "./component map/ComponentMap"
/* utils */
import history from "./utils/history";

/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import "toastr/build/toastr.min.css"
import "normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navigation />
        <Switch>
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path='/contact' />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
