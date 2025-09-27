import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import ChatWindow from "./ChatWindow";
import StatusUploader from "./StatusUploader";
import StatusViewer from "./StatusViewer";
import { subscribeToNotifications } from "./notifications";
import { API_BASE } from "./config";
import Login from "./Login";

// Connect socket.io to backend
const socket = io(API_BASE, {
  transports: ["websocket"],
  withCredentials: true,
});

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    subscribeToNotifications();
  }, []);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="app">
      <header className="header">💖 PinkChat</header>
      <div className="main">
        <ChatWindow socket={socket} currentUser={user.username} />
        <aside>
          <StatusUploader socket={socket} currentUser={user.username} />
          <StatusViewer socket={socket} />
        </aside>
      </div>
    </div>
  );
}

export default App;
