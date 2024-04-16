import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState("");

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedUsername(username);
    setUsername("");
    setPassword("");
    setIsLoggedIn(true);
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="label-input-container">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        {isLoggedIn && (
          <div className="login-container">
            <p>Welcome, {submittedUsername}!</p>
            <button className="submit" type="submit" onClick={toggleLogin}>
              Logout
            </button>
          </div>
        )}
      </div>
      {!isLoggedIn && (
        <div className="logout-container">
          <p>Please Login</p>
          <button className="submit" type="submit">
            Login
          </button>
        </div>
      )}
    </form>
  );
}

export default LoginForm;
