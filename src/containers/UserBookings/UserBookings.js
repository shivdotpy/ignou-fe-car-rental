import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "semantic-ui-react";

import PageHeader from "../../components/PageHeader/PageHeader";
import BookingCard from "../../components/BookingCard/BookingCard";

import { PAGE_HEADERS } from "../../utils/labels";
import { getUserIdFromLocalStorage } from "../../utils/helpers";
import { API_ENDPOINTS } from "../../utils/constants";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_ENDPOINTS.BASE_URL}${
          API_ENDPOINTS.USER_BOOKING_ENDPOINT
        }/${getUserIdFromLocalStorage()}`
      )
      .then((response) => setBookings(response.data.data))
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div>
      <PageHeader />
      <h3 className="user-cars__header">{PAGE_HEADERS.USER_BOOKINGS} </h3>
      <Container>
        <Grid>
          <Grid.Row>
            {bookings.map((booking, index) => {
              if (booking.status === "booked") {
                return (
                  <Grid.Column computer={4} className="mt-3">
                    <BookingCard booking={booking} index={index} />
                  </Grid.Column>
                );
              }
            })}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default UserBookings;
