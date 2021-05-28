import React from "react";
import "./UserCars.scss";

import PageHeader from "../../components/PageHeader/PageHeader";

const UserCars = () => {
  return (
    <div className="user-cars">
      <PageHeader />
      <div className="user-cars__container"></div>
    </div>
  );
};

export default UserCars;
