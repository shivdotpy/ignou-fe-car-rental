import { BrowserRouter, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.scss";

import UserRegistration from "./containers/UserRegistration/UserRegistration";
import UserLogin from "./containers/UserLogin/UserLogin";
import UserCars from "./containers/UserCars/UserCars";
import AdminLogin from "./containers/AdminLogin/AdminLogin";
import AdminCars from "./containers/AdminCars/AdminCars";

import { ROUTES } from "./utils/constants";

function App() {
  return (
    <BrowserRouter>
      <Route path={ROUTES.USER_REGISTRATION} component={UserRegistration} />
      <Route path={ROUTES.USER_LOGIN} component={UserLogin} />
      <Route path={ROUTES.USER_CARS} component={UserCars} />
      <Route path={ROUTES.ADMIN_LOGIN} component={AdminLogin} />
      <Route path={ROUTES.ADMIN_CARS} component={AdminCars} />
    </BrowserRouter>
  );
}

export default App;
