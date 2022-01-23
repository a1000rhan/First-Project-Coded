import React from "react";

const Form = () => {
  return;
  <div className="container">
    <form onSubmit={hundleSubmit(onSubmit)} />
    <label>userName</label>
    <input type="text" placeholder="userName" onChange={hundleChange} />
    <label>password</label>
    <input type="text" placeholder="password" onChange={hundleChange} />
    <label>email</label>
    <input type="text" placeholder="email" />
    <Button sub="submit" onClick={handleSubmit}>
      submit
    </Button>
  </div>;
};

export default Form;
