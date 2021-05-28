import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./UserLogin.scss";

import { API_ENDPOINTS, ROUTES } from "../../utils/constants";
import { BUTTON_LABELS, FORM_HEADERS } from "../../utils/labels";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const userLogin = () => {
    const request = {
      email,
      password,
    };

    axios
      .post(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.USER_LOGIN_ENDPOINT, request)
      .then((response) => history.push(ROUTES.BOOKINGS))
      .catch((error) => setErrorMessage(error.response.data.message));
  };

  return (
    <div className="user-login">
      <div className="user-login__box">
        <h2>{FORM_HEADERS.USER_LOGIN}</h2>
        <div className="user-login__box-input">
          <Input
            icon="mail"
            iconPosition="left"
            placeholder="E-Mail"
            fluid
            onChange={(event, { value }) => setEmail(value)}
          />
        </div>
        <div className="user-login__box-input">
          <Input
            icon="key"
            iconPosition="left"
            placeholder="Password"
            type="password"
            fluid
            onChange={(event, { value }) => setPassword(value)}
          />
        </div>

        <div className="user-login__action">
          <Button primary onClick={userLogin}>
            {BUTTON_LABELS.LOGIN}
          </Button>
        </div>
        <div className="user-login__error-msg">
          <span>{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
