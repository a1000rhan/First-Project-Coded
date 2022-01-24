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
    <div className="container">
      <Button className="delete" onClick={() => setIsOpen(true)}>
        Sign In
      </Button>
      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <label>User Name</label>
            <input name="username" type="text" onChange={handleChange} />
            <div>
              <label>Password</label>
              <input name="password" type="password" onChange={handleChange} />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" value="signIn" onClick={handleSubmit}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default SignInModal;
