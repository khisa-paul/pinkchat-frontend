import React, { useState } from "react";

export default function Register({ setPage }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://your-backend-url.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, phone, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registered successfully");
        setPage("login");
      } else {
        alert(data.msg);
      }
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="register">
      <h2>Create PinkChat 💖 Account</h2>
      <form onSubmit={handleRegister}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <span onClick={() => setPage("login")}>Login</span>
      </p>
    </div>
  );
}
