import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Icon } from "semantic-ui-react";
import "./AdminBookings.scss";

import AdminHeader from "../../components/AdminHeader/AdminHeader";

import { PAGE_HEADERS } from "../../utils/labels";
import { API_ENDPOINTS } from "../../utils/constants";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings();
  }, []);

  const getBookings = () => {
    axios
      .get(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.ADMIN_BOOKING_ENDPOINT)
      .then((response) => {
        setBookings(response.data.data);
      })
      .catch((error) => console.error(error.response));
  };

  const cancelBooking = (id, car_id) => {
    axios
      .delete(
        `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.CANCEL_BOOKING_ENDPOINT}/${id}/${car_id}`
      )
      .then(() => {
        getBookings();
      })
      .catch((error) => console.error(error.response));
  };

  // TODO
  const completeBooking = (id, car_id) => {};

  return (
    <div>
      <AdminHeader />
      <br />
      <Container>
        <h3 className="admin-bookings__header">
          {PAGE_HEADERS.ADMIN_BOOKINGS}
        </h3>
        <div className="admin-bookings__table">
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Car Id</Table.HeaderCell>
                <Table.HeaderCell>Car Name (Model)</Table.HeaderCell>
                <Table.HeaderCell>Day Cost</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {bookings.length ? (
                bookings.map((booking) => (
                  <Table.Row key={booking.id}>
                    <Table.Cell>{booking.id}</Table.Cell>
                    <Table.Cell>{booking.name}</Table.Cell>
                    <Table.Cell>{booking.cost}</Table.Cell>
                    <Table.Cell>{booking.status}</Table.Cell>
                    <Table.Cell textAlign="center">
                      {booking.status === "booked" ? (
                        <>
                          <Icon
                            name="check"
                            color="green"
                            className="pointer"
                            // onClick={() => deleteCar(car.id)}
                          />
                          <Icon
                            name="close"
                            color="red"
                            className="pointer"
                            onClick={() =>
                              cancelBooking(booking.id, booking.car_id)
                            }
                          />
                        </>
                      ) : null}
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell collapsing={true} textAlign="center">
                    No Booking Available
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default AdminBookings;
