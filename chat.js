// src/Chat.js
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { API_BASE } from "./config";

const socket = io(API_BASE, { transports: ["websocket"], withCredentials: true });

function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("chatMessage");
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;
    const msg = { sender: user.username, text };
    socket.emit("chatMessage", msg);
    setMessages((prev) => [...prev, msg]);
    setText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome {user?.username} 💬</h2>
      <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "10px", height: "200px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: "left", margin: "5px 0" }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        style={{ width: "70%", padding: "5px" }}
      />
      <button onClick={sendMessage} style={{ padding: "5px 10px", marginLeft: "5px" }}>
        Send
      </button>
    </div>
  );
}

export default Chat;
