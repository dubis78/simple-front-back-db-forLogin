import React, { useState } from "react";
import Axios from "axios";
import sha1 from "sha1";
import "../App.css";

export default function Registration() {
  const [userEmailReg, setUserEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  // Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("https://kuepj-3001.sse.codesandbox.io/api/register", {
      //Axios.post("http://localhost:3001/api/register", {      userEmail: userEmailReg,
      userEmail: userEmailReg,
      password: sha1(passwordReg)
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("https://kuepj-3001.sse.codesandbox.io/api/login", {
      //Axios.post("http://localhost:3001/api/login", {
      userEmail: userEmail,
      password: sha1(password)
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>UserEmail</label>
        <input
          type="email"
          onChange={(e) => {
            setUserEmailReg(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}> Register </button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="UserEmail..."
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>
      </div>
    </div>
  );
}
