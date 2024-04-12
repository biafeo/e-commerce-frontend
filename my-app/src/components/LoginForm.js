import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUsername("");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
          type="text"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </label>
      {isLoggedIn ? (
        <button type="submit" onClick={toggleLogin}>
          Logout
        </button>
      ) : (
        <button type="submit" onClick={toggleLogin}>
          Login
        </button>
      )}
    </form>
  );
}

export default LoginForm;
