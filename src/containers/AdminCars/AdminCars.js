import React, { useEffect, useState } from "react";
import { Icon, Table, Modal, Button } from "semantic-ui-react";
import axios from "axios";
import "./AdminCars.scss";

import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminCarModal from "../../components/AddCarModal/AddCarModal";

import { PAGE_HEADERS } from "../../utils/labels";
import { API_ENDPOINTS } from "../../utils/constants";

const AdminCars = () => {
  const [cars, setCars] = useState([]);
  const [showCarModal, setShowCarModal] = useState(false);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    axios
      .get(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.ADMIN_ALL_CARS_ENDPOINT)
      .then((response) => {
        setCars(response.data.data);
        getCars();
      })
      .catch((error) => console.error(error.response));
  };

  return (
    <div className="admin-cars">
      <AdminHeader />
      <div className="admin-cars__container">
        <h3 className="admin-cars__header">
          {PAGE_HEADERS.ADMIN_CARS}{" "}
          <Icon
            name="plus circle"
            className="pointer"
            size="large"
            onClick={() => setShowCarModal(true)}
          />
        </h3>
        <div className="admin-cars__table">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Car Id</Table.HeaderCell>
                <Table.HeaderCell>Car Name (Model)</Table.HeaderCell>
                <Table.HeaderCell>Day Cost</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {cars.length ? (
                cars.map((car) => (
                  <Table.Row>
                    <Table.Cell>{car.id}</Table.Cell>
                    <Table.Cell>{car.name}</Table.Cell>
                    <Table.Cell>{car.cost}</Table.Cell>
                    <Table.Cell>{car.status}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell collapsing={true} textAlign="center">
                    No Cars Available, Please add some cars
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </div>

      {/* ADD CARS MODAL */}
      {showCarModal && (
        <AdminCarModal
          showCarModal={showCarModal}
          setShowCarModal={setShowCarModal}
        />
      )}
    </div>
  );
};

export default AdminCars;
