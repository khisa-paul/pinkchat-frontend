import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { API_BASE } from "./config";
import { subscribeToNotifications } from "./notifications";
import ChatWindow from "./ChatWindow";
import StatusUploader from "./StatusUploader";
import StatusViewer from "./StatusViewer";
import Login from "./Login";

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
