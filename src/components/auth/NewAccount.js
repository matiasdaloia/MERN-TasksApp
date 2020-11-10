import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, name, password2 } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED");
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign Up</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              onChange={(e) => onChange(e)}
              type="text"
              placeholder="Your Name"
              value={name}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              onChange={(e) => onChange(e)}
              type="email"
              placeholder="Your Email"
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              onChange={(e) => onChange(e)}
              type="password"
              value={password}
              placeholder="Your Password"
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password2">Repeat Password</label>
            <input
              id="password2"
              name="password2"
              onChange={(e) => onChange(e)}
              type="password"
              value={password2}
              placeholder="Repeat Password"
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign Up"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
