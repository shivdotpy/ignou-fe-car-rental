import { BrowserRouter, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import AdminLogin from "./containers/AdminLogin/AdminLogin";
import UserLogin from "./containers/UserLogin/UserLogin";
import UserRegistration from "./containers/UserRegistration/UserRegistration";
import { ROUTES } from "./utils/constants";

function App() {
  return (
    <BrowserRouter>
      <Route path={ROUTES.USER_REGISTRATION} component={UserRegistration} />
      <Route path={ROUTES.USER_LOGIN} component={UserLogin} />
      <Route path={ROUTES.ADMIN_LOGIN} component={AdminLogin} />
    </BrowserRouter>
  );
}

export default App;
