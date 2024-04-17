import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    console.log("toggling");
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      {isLoggedIn ? (
        <div className="login-container">
          <p>Welcome! </p>
          <button className="submit" type="submit" onClick={toggleLogin}>
            Logout
          </button>
        </div>
      ) : (
        <div className="logout-container">
          <p>Please Login </p>
          <button onClick={toggleLogin} className="submit" type="submit">
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default LoginForm;
