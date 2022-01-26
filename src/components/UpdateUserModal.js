import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authstore from "../store/AuthStore";

const UpdateUserModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ username: authstore.user.username, email: authstore.user.email, password: authstore.user.password });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    authstore.updateUser(user);
    setIsOpen(false);
  };
  return (
    <div className="sign-item">
      <Button onClick={() => setIsOpen(true)}>Update User</Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>User Name </Form.Label>
            <Form.Control name="username" value={user.username} type="text" onChange={handleChange} />
            <div>
              <Form.Label>Eamil </Form.Label>
              <Form.Control name="email" type="email" value={user.email} onChange={handleChange} />
            </div>
            <div>
              <Form.Label>Change Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Update User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateUserModal;
