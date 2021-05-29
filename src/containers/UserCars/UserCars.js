import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid } from "semantic-ui-react";
import "./UserCars.scss";

import PageHeader from "../../components/PageHeader/PageHeader";
import CarCard from "../../components/CarCard/CarCard";

import { getUserIdFromLocalStorage } from "../../utils/helpers";

import { PAGE_HEADERS } from "../../utils/labels";
import { API_ENDPOINTS } from "../../utils/constants";

const UserCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    axios
      .get(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.ADMIN_ALL_CARS_ENDPOINT)
      .then((response) => {
        setCars(response.data.data);
      })
      .catch((error) => console.error(error.response));
  };

  const bookCar = (car_id) => {
    const request = {
      car_id,
      user_id: getUserIdFromLocalStorage(),
      date: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    axios
      .post(
        API_ENDPOINTS.BASE_URL + API_ENDPOINTS.USER_CREATE_BOOKING_ENDPOINT,
        request
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error.response));

    console.log("request", request);
  };

  return (
    <div className="user-cars">
      <PageHeader />
      <h3 className="user-cars__header">{PAGE_HEADERS.USER_CARS} </h3>
      <Container>
        <Grid>
          <Grid.Row>
            {cars.map((car, index) => {
              if (car.status === "available") {
                return (
                  <Grid.Column computer={4} className="mt-3">
                    <CarCard car={car} index={index} bookCar={bookCar} />
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

export default UserCars;
