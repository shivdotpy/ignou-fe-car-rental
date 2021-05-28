import React from "react";
import { List, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import "./PageHeader.scss";

import { USER_NAVBAR_LABELS } from "../../utils/labels";
import { ROUTES } from "../../utils/constants";

const PageHeader = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push(ROUTES.USER_LOGIN);
  };

  return (
    <div className="page-header">
      <div>
        <h3>{USER_NAVBAR_LABELS.USER_PANEL}</h3>
      </div>
      <div>
        <List horizontal>
          <List.Item>
            <List.Content className="pointer">
              <Link to={ROUTES.USER_CARS}>{USER_NAVBAR_LABELS.CARS}</Link>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content className="pointer">
              <Link to={ROUTES.USER_BOOKINGS}>
                {USER_NAVBAR_LABELS.MY_BOOKINGS}
              </Link>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content className="ml-3 pointer" onClick={logout}>
              <Icon name="power off" /> {USER_NAVBAR_LABELS.LOGOUT}
            </List.Content>
          </List.Item>
        </List>
      </div>
    </div>
  );
};

export default PageHeader;
