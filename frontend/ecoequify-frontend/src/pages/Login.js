// src/pages/Login.js
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic for authentication
    alert("Logging in with: " + email);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border rounded-lg w-full"
          />
        </div>
        <button type="submit" className="p-2 bg-blue-600 text-white rounded-lg w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
