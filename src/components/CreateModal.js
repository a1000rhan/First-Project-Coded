import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import dataStore from "../store/dataStore";

const CreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [money, setMoney] = useState({
    title: "",
    image: "",
    amount: "",
    limit: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (event) => {
    setMoney({ ...money, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.createTask(money);
    setIsOpen(false);
  };

  return (
    <div className="center-button">
<Button onClick={() => setIsOpen(true)}>Create New Jam3eia</Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Jam3eia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Title</Form.Label>
            <Form.Control name="username" type="text" onChange={handleChange} />
            <div>
              <Form.Label>Image</Form.Label>
              <Form.Control name="image" type="text" onChange={handleChange} />
            </div>
            <div>
            <Form.Label>Amount</Form.Label>
            <Form.Control name="amount" type="text" onChange={handleChange} />
            </div>
            <div>
            <Form.Label>Limit</Form.Label>
            <Form.Control name="limit" type="text" onChange={handleChange} />
            </div>
            <div>
            <Form.Label>Start Date</Form.Label>
            <Form.Control name="startDate" type="text" onChange={handleChange} />
            </div>
            <div>
            <Form.Label>End Date</Form.Label>
            <Form.Control name="endDate" type="email" onChange={handleChange} />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Create New
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateModal;
