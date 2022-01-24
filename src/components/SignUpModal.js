import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authstore from "../store/AuthStore";

const SignUpModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // to do : stop page from refreshing
    event.preventDefault();

    // call a function to sign up
    authstore.signUp(user);

    setIsOpen(false);
  };
  return (
    <div className="sign-item">
      <Button onClick={() => setIsOpen(true)}>Sign Up</Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form" onSubmit={handleSubmit}>
            <label>User Name </label>
            <input name="username" type="text" onChange={handleChange} />
            <div>
              <label>Eamil </label>
              <input name="email" type="email" onChange={handleChange} />
            </div>
            <div>
              <label>Password </label>
              <input name="password" type="password" onChange={handleChange} />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignUpModal;
