import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatWindow from "./components/ChatWindow";
import StatusUploader from "./components/StatusUploader";
import StatusViewer from "./components/StatusViewer";
import { subscribeToNotifications } from "./notifications";

const socket = io("http://localhost:5000"); // change to Render backend URL

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
