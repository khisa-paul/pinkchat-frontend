import React, { useState } from "react";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !phone) {
      alert("Please enter both username and phone number.");
      return;
    }
    setUser({ username, phone });
  };

  return (
    <div className="login-container">
      <h2>Login to PinkChat</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Join Chat</button>
      </form>
    </div>
  );
}

export default Login;
