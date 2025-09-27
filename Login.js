import React, { useState } from "react";

export default function Login({ setPage, setUser }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://your-backend-url.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });
      const data = await res.json();
      if (res.ok) setUser(data.user);
      else alert(data.msg);
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="login">
      <h2>Login to PinkChat 💖</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>
        No account? <span onClick={() => setPage("register")}>Register</span>
      </p>
      <p>
        <span onClick={() => setPage("forgot")}>Forgot password?</span>
      </p>
    </div>
  );
}
