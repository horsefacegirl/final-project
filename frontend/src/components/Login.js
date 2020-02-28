import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleLogin = async event => {
    event.preventDefault();
    fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify({
        userName,
        email,
        password
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(user => {
        if (user.accessToken) {
          history.push("/secrets");
        } else {
          setErrorMessage(user.message);
        }
      });
  };

  return (
    <div>
      <img src="" alt="logo" />
      <h1></h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">e-mail</label>
        <input
          id="email"
          type="text"
          value={email}
          required
          onChange={event => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          value={password}
          required
          onChange={event => setPassword(event.target.value)}
        ></input>
        <button tyoe="submit">Login</button>
      </form>
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  );
};
