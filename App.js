// src/App.js
import React, { useState } from "react";
import Chat from "./Chat";

function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  const handleLogin = (username, phone) => {
    setUser({ username, phone });
    setPage("chat");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      {page === "login" && (
        <div>
          <h1>Login to PinkChat 💖</h1>
          <input type="text" placeholder="Username" id="username" /><br /><br />
          <input type="text" placeholder="Phone Number" id="phone" /><br /><br />
          <button onClick={() =>
            handleLogin(
              document.getElementById("username").value,
              document.getElementById("phone").value
            )
          }>Login</button>
          <p>
            <button onClick={() => setPage("register")}>Register</button> |{" "}
            <button onClick={() => setPage("forgot")}>Forgot Password</button>
          </p>
        </div>
      )}

      {page === "register" && (
        <div>
          <h1>Register</h1>
          <input type="text" placeholder="Choose Username" /><br /><br />
          <input type="text" placeholder="Phone Number" /><br /><br />
          <input type="password" placeholder="Password" /><br /><br />
          <button onClick={() => setPage("login")}>Submit & Go to Login</button>
        </div>
      )}

      {page === "forgot" && (
        <div>
          <h1>Forgot Password</h1>
          <input type="text" placeholder="Phone Number" /><br /><br />
          <button onClick={() => setPage("login")}>Reset & Back to Login</button>
        </div>
      )}

      {page === "chat" && <Chat user={user} />}
    </div>
  );
}

export default App;
