import React, { useState } from "react";
import Login from "./Login.js";
import Register from "./Register.js";
import ForgotPassword from "./ForgotPassword.js";
import Chat from "./Chat.js";

export default function App() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  if (user) return <Chat user={user} />;

  return (
    <div className="app">
      {page === "login" && <Login setPage={setPage} setUser={setUser} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "forgot" && <ForgotPassword setPage={setPage} />}
    </div>
  );
}
