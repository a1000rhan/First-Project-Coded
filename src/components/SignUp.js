import React, { useState } from "react";

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
    event.preventDefault(); //complete the code
  };
}

return (
  <>
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
  </>
);
