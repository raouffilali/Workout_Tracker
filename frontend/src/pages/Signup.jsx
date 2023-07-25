/* eslint-disable no-unused-vars */
import { useState } from "react";
import useSignup from '../hooks/useSignup';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label> Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label> Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" disabled={isLoading}>
        Sign Up
      </button>

      {error && <div className="error">{error.message}</div>}

      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </form>
  );
}

export default Signup;
