import {
  Router, Switch, Route
} from "react-router-dom";
/* Components */
import { Home, Login, Navigation, ProtectedRoute, Register, ForgotPassword, Message } from "./component map/ComponentMap"
/* utils */
import history from "./utils/history";
/* Contex */
import { UContex, UserContex } from "./Contex/Contex"
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import "toastr/build/toastr.min.css"
import "normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import { useEffect } from "react";


function App() {
  useEffect(() => { Message() })

  return (
    <div className="App">
      <UContex.Provider value={UserContex}>
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
      </UContex.Provider>
    </div>
  );
}

export default App;
