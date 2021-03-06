import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import authstore from "../store/AuthStore";

function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // to do : stop page from refreshing
    event.preventDefault();

    // call a function to sign up
    authstore.signIn(user);

    setIsOpen(false);
  };

  return (
    <div className="sign-item">
      <Button onClick={() => setIsOpen(true)}>Sign In</Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              className="mb-3"
              name="username"
              type="text"
              onChange={handleChange}
            />
            <div>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                onChange={handleChange}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SignInModal;
