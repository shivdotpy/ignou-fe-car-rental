import { BrowserRouter, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import AdminLogin from "./containers/AdminLogin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Route path="/admin-login" component={AdminLogin} />
    </BrowserRouter>
  );
}

export default App;
