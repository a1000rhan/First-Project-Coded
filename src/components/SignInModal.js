import React, { useState } from "react";
import authstore from "./AuthStore";

function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const hundleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authstore.signIn(user);
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


export