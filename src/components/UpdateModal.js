import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import dataStore from "../store/dataStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateModal = ({ list, closeModal, isOpen }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [money, setMoney] = useState({
    _id: list._id,
    title: list.title,
    image: list.image,
    amount: list.amount,
    limit: list.limit,
    startDate: list.startDate,
    endDate: list.endDate,
  });

  const handleChange = (event) => {
    setMoney({ ...money, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.updateTask(money);
    console.log(money);
    closeModal();
  };

  return (
    <div className="center-button">
      <Modal centered show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Jam3eia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              value={money.title}
              onChange={handleChange}
            />
            <div>
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                type="text"
                value={money.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Amount</Form.Label>
              <Form.Control
                name="amount"
                type="text"
                value={money.amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Limit</Form.Label>
              <Form.Control
                name="limit"
                type="text"
                value={money.limit}
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Start Date</Form.Label>
              <DatePicker
                placeholderText="Select Start Date"
                showTimeSelect
                dateFormat="Pp"
                selected={startDate}
                value={money.startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <Form.Label>End Date</Form.Label>
              {/* <Form.Control name="endDate" type="text" onChange={handleChange} /> */}
              <DatePicker
                placeholderText="Select End Date"
                showTimeSelect
                dateFormat="Pp"
                selected={endDate}
                value={money.endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateModal;
