import React, { useState } from "react";
import authstore from "../store/AuthStore";

function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authstore.signUp(user);
  };
}

return (
  <div className="container">
    <form onSubmit={hundleSubmit(onSubmit)}>
      <label>userName</label>
      <input type="text" placeholder="userName" onChange={hundleChange} />
      <label>password</label>
      <input type="text" placeholder="password" onChange={hundleChange} />
      <label>email</label>
      <input type="text" placeholder="email" />
      <Button type="submit" onClick={handleSubmit}>
        submit
      </Button>
    </form>
  </div>
);

export default SignUpModal();
