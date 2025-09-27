import React, { useState } from "react";

export default function ForgotPassword({ setPage }) {
  const [phone, setPhone] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://your-backend-url.onrender.com/api/auth/forgot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      alert(data.msg);
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="forgot">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgot}>
        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>
        Back to <span onClick={() => setPage("login")}>Login</span>
      </p>
    </div>
  );
}
