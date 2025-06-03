import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    // Submit logic here
    console.log("Logging in:", form);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="login-label">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="login-input"
          />
        </div>
        <div className="form-group">
          <label className="login-label">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="login-input"
          />
        </div>
        {error && <div className="form-error">{error}</div>}
        <button className="login-btn" type="submit">
          Login
        </button>
        <div className="login-link">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
