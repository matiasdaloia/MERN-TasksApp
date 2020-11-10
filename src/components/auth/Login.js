import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
        <h1>Iniciar Sesión</h1>
        <form onSubmit={(e) => onSubmit(e)}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Login"
            />
          </div>
        </form>
        <Link to={"/new-account"} className="enlace-cuenta">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
