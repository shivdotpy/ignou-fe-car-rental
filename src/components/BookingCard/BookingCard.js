import React from "react";
import { Card, Button } from "semantic-ui-react";

import Car0 from "../../assets/images/car1.jpeg";
import Car1 from "../../assets/images/car1.jpeg";
import Car2 from "../../assets/images/car2.jpeg";
import Car3 from "../../assets/images/car3.jpeg";
import Car4 from "../../assets/images/car4.jpeg";
import Car5 from "../../assets/images/car5.jpeg";
import Car6 from "../../assets/images/car6.jpeg";
import { getDate } from "../../utils/date";

const BookingCard = ({ booking, index, bookCar }) => {
  const images = [Car5, Car1, Car2, Car3, Car4, Car5, Car6, Car0];

  return (
    <Card>
      <img src={images[index]} wrapped ui={false} style={{ height: "172px" }} />
      <Card.Content>
        <Card.Header>{booking.name}</Card.Header>
        <Card.Meta>
          <span className="date">Cost: Rs.{booking.cost}</span>
        </Card.Meta>
        <Card.Meta>
          <span className="date">Date: {getDate(booking.date)}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button secondary onClick={() => bookCar(booking.id)}>
          Cancel Booking
        </Button>
      </Card.Content>
    </Card>
  );
};

export default BookingCard;
