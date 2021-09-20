import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialValues = {
  username: '',
  password: ''
}

const Login = () => {
  
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialValues);
  

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/login', formValues)
      .then((res) => {
        console.log("Axios Login Post", res)
        localStorage.setItem('token', res.data.payload)
        push('/Home')
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  return (
    <div>
      <h1>Water Your Plants!</h1>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">
            Username
          </label><br/>
          <input
            id="username"
            data-testid="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          /><br/><br/>

          <label htmlFor="password">
            Password
          </label><br/>
          <input
            id="password"
            data-testid="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          /><br/>
          

          <button>Login</button>

        </form>
      </div>

      <p id="error" className="error">{error}</p>
    </div>
  );
};

export default Login;

