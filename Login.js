import React, { useState } from "react";
import { API_BASE } from "./config";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !phone) {
      alert("Both fields required");
      return;
    }

    try {
      // Register/login request
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, phone }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="login-container">
      <h2>💖 Welcome to PinkChat</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Login / Register</button>
      </form>
    </div>
  );
}

export default Login;
