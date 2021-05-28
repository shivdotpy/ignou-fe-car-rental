import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.scss";

import { API_ENDPOINTS, ROUTES } from "../../utils/constants";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const adminLogin = () => {
    const request = {
      email,
      password,
    };

    axios
      .post(
        API_ENDPOINTS.BASE_URL + API_ENDPOINTS.ADMIN_LOGIN_ENDPOINT,
        request
      )
      .then((response) => history.push(ROUTES.BOOKINGS))
      .catch((error) => setErrorMessage(error.response.data.message));
  };

  return (
    <div className="admin-login">
      <div className="admin-login__box">
        <h2>Admin Login</h2>
        <div className="admin-login__box-input">
          <Input
            icon="mail"
            iconPosition="left"
            placeholder="E-Mail"
            fluid
            onChange={(event, { value }) => setEmail(value)}
          />
        </div>
        <div className="admin-login__box-input">
          <Input
            icon="key"
            iconPosition="left"
            placeholder="Password"
            type="password"
            fluid
            onChange={(event, { value }) => setPassword(value)}
          />
        </div>

        <div className="admin-login__action">
          <Button primary onClick={adminLogin}>
            Login
          </Button>
        </div>
        <div className="admin-login__error-msg">
          <span>{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
