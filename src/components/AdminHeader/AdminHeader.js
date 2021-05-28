import React from "react";
import { List, Icon } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { ADMIN_NAVBAR_LABELS } from "../../utils/labels";
import "./AdminHeader.scss";
import { ROUTES } from "../../utils/constants";

const AdminHeader = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push(ROUTES.ADMIN_LOGIN);
  };

  return (
    <div className="admin-header">
      <div>
        <h3>{ADMIN_NAVBAR_LABELS.ADMIN_PANEL}</h3>
      </div>
      <div>
        <List horizontal>
          <List.Item>
            <List.Content className="pointer">
              <Link to={ROUTES.ADMIN_CARS}>{ADMIN_NAVBAR_LABELS.CARS}</Link>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content className="pointer">
              <Link to={ROUTES.ADMIN_BOOKINGS}>
                {ADMIN_NAVBAR_LABELS.BOOKINGS}
              </Link>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content className="ml-3 pointer" onClick={logout}>
              <Icon name="power off" /> {ADMIN_NAVBAR_LABELS.LOGOUT}
            </List.Content>
          </List.Item>
        </List>
      </div>
    </div>
  );
};

export default AdminHeader;
