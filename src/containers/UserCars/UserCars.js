import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Card, Image, Button } from "semantic-ui-react";
import "./UserCars.scss";

import PageHeader from "../../components/PageHeader/PageHeader";

import { getUserIdFromLocalStorage } from "../../utils/helpers";

import { PAGE_HEADERS } from "../../utils/labels";
import { API_ENDPOINTS } from "../../utils/constants";

import Car0 from "../../assets/images/car1.jpeg";
import Car1 from "../../assets/images/car1.jpeg";
import Car2 from "../../assets/images/car2.jpeg";
import Car3 from "../../assets/images/car3.jpeg";
import Car4 from "../../assets/images/car4.jpeg";
import Car5 from "../../assets/images/car5.jpeg";
import Car6 from "../../assets/images/car6.jpeg";

const UserCars = () => {
  const [cars, setCars] = useState([]);

  const images = [Car5, Car1, Car2, Car3, Car4, Car5, Car6];

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
            {cars.map((car, index) => (
              <Grid.Column computer={4} className="mt-3">
                <Card>
                  <img
                    src={images[index]}
                    wrapped
                    ui={false}
                    style={{ height: "172px" }}
                  />
                  <Card.Content>
                    <Card.Header>{car.name}</Card.Header>
                    <Card.Meta>
                      <span className="date">Cost: Rs.{car.cost}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra textAlign="center">
                    <Button secondary onClick={() => bookCar(car.id)}>
                      Book Now
                    </Button>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default UserCars;
