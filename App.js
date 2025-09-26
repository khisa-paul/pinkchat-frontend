// src/App.js
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatWindow from "./components/ChatWindow";
import StatusUploader from "./components/StatusUploader";
import StatusViewer from "./components/StatusViewer";
import { subscribeToNotifications } from "./notifications";
import { API_BASE } from "./config";

// ✅ Connect socket.io directly to your Render backend
const socket = io(API_BASE, {
  transports: ["websocket", "polling"],
  withCredentials: true,
});

function App() {
  const [user, setUser] = useState("Alice");

  useEffect(() => {
    subscribeToNotifications();
  }, []);

  return (
    <div className="app">
      <header className="header">💖 PinkChat</header>
      <div className="main">
        <ChatWindow socket={socket} currentUser={user} />
        <aside>
          <StatusUploader socket={socket} currentUser={user} />
          <StatusViewer socket={socket} />
        </aside>
      </div>
    </div>
  );
}

export default App;
