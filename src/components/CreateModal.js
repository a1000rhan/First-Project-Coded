import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import dataStore from "../store/dataStore";

import DatePicker from "react-datepicker";

const CreateModal = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
 

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
  const handleStartDate = (date) => {
    setStartDate(date);
    setMoney({ ...money, startDate: startDate });
    console.log(date);
  };
  const handleEndDate = (date) => {
    setEndDate(date);
    setMoney({ ...money, endDate: endDate });
    console.log(date);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dataStore.createTask(money);

    setMoney({
      title: "",
      image: "",
      amount: "",
      limit: "",
      startDate: "",
      endDate: "",
    });
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
            <Form.Control name="title" type="text" onChange={handleChange} />
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
              {/* <DatePicker
                placeholderText="Select Start Date"
                showTimeSelect
                dateFormat="yyyy/mm/dd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              /> */}
              <DatePicker
                placeholderText="Select Start Date"
                showTimeSelect
                dateFormat="Pp"
                selected={startDate}
                onChange={handleStartDate}
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
                onChange={handleEndDate}
              />
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
