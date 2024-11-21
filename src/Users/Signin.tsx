import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import "./signin.css";
export default function Signin() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER", dob: "", email: ""
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  const signup = () => {
    navigate("/Kanbas/Account/Signup");
  };
  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      {error && <div className="error">{error}</div>}
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
      </div>
      <div className="button-container">
        <button onClick={signin}>Sign In</button>
        <button onClick={signup}>Sign Up</button>
      </div>
    </div>
  );
}
