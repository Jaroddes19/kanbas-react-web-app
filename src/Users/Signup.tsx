import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "./signin.css"
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  const signin = () => {
    navigate("/Kanbas/Account/Signin");
  };
  return (
    <div className="signin-container"> {/* Using the same CSS class for consistency */}
      <h1>Sign Up</h1>
      {error && <div className="error">{error}</div>}
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={(e) => setUser({
            ...user, username: e.target.value
          })}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({
            ...user, password: e.target.value
          })}
        />
      </div>
      <div className="button-container">
        <button onClick={signup}>Sign Up</button>
        <button onClick={signin}>Sign In</button>

      </div>

    </div>
  );
}
