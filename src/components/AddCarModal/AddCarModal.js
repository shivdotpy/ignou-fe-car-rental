import React, { useState } from "react";
import { Modal, Button, Input } from "semantic-ui-react";
import axios from "axios";
import "./AddCarModal.scss";

import { BUTTON_LABELS } from "../../utils/labels";
import { API_ENDPOINTS } from "../../utils/constants";

const AddCarModal = ({ showCarModal, setShowCarModal }) => {
  const [name, setname] = useState("");
  const [cost, setCost] = useState("");

  const addCar = () => {
    const request = {
      name,
      cost,
    };
    axios
      .post(
        API_ENDPOINTS.BASE_URL + API_ENDPOINTS.ADMIN_ADD_CAR_ENDPOINT,
        request
      )
      .then((response) => setShowCarModal(false))
      .catch((error) => console.error(error.response));
  };

  return (
    <Modal open={showCarModal} size="tiny" className="add-car-modal">
      <Modal.Header>Add Car</Modal.Header>
      <Modal.Content>
        <div className="add-car-modal__input">
          <label>Car Name with Model</label>
          <Input
            placeholder="Car Name"
            fluid
            onChange={(event, { value }) => setname(value)}
          />
        </div>
        <div className="add-car-modal__input">
          <label>Car Cost</label>
          <Input
            placeholder="Car Cost"
            fluid
            onChange={(event, { value }) => setCost(value)}
          />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={addCar}>
          {BUTTON_LABELS.SAVE}
        </Button>
        <Button negative onClick={() => setShowCarModal(false)}>
          {BUTTON_LABELS.CLOSE}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddCarModal;
