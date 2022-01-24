import React from "react";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Create New User</Button>
      <Form> </Form>
    </div>
  );
};

export default CreateModal;
