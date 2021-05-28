import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./UserRegistration.scss";

import { API_ENDPOINTS, ROUTES } from "../../utils/constants";
import { BUTTON_LABELS, FORM_HEADERS } from "../../utils/labels";

const UserRegistration = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const userRegistration = () => {
    const request = {
      name,
      mobile,
      email,
      password,
    };

    axios
      .post(
        API_ENDPOINTS.BASE_URL + API_ENDPOINTS.USER_REGISTER_ENDPOINT,
        request
      )
      .then((response) => history.push(ROUTES.BOOKINGS))
      .catch((error) => setErrorMessage(error.response.data.message));
  };

  return (
    <div className="user-registration">
      <div className="user-registration__box">
        <h2>{FORM_HEADERS.USER_REGISTRATION}</h2>
        <div className="user-registration__box-input">
          <Input
            icon="user"
            iconPosition="left"
            placeholder="Name"
            fluid
            onChange={(event, { value }) => setName(value)}
          />
        </div>
        <div className="user-registration__box-input">
          <Input
            icon="phone"
            iconPosition="left"
            placeholder="Mobile"
            fluid
            onChange={(event, { value }) => setMobile(value)}
          />
        </div>
        <div className="user-registration__box-input">
          <Input
            icon="mail"
            iconPosition="left"
            placeholder="E-Mail"
            fluid
            onChange={(event, { value }) => setEmail(value)}
          />
        </div>
        <div className="user-registration__box-input">
          <Input
            icon="key"
            iconPosition="left"
            placeholder="Password"
            type="password"
            fluid
            onChange={(event, { value }) => setPassword(value)}
          />
        </div>

        <div className="user-registration__action">
          <Button primary onClick={userRegistration}>
            {BUTTON_LABELS.REGISTER}
          </Button>
        </div>
        <div className="user-registration__error-msg">
          <span>{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
