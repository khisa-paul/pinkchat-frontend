// src/components/ChatWindow.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function ChatWindow({ socket, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // ✅ Fetch existing messages from backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/messages`);
        setMessages(res.data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };
    fetchMessages();
  }, []);

  // ✅ Listen for new messages via socket.io
  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receiveMessage");
  }, [socket]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: currentUser, text: input };

    // Save to backend (this will also trigger socket broadcast)
    try {
      await axios.post(`${API_BASE}/api/messages`, newMessage);
    } catch (err) {
      console.error("Failed to send message:", err);
    }

    setInput("");
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${msg.sender === currentUser ? "self" : ""}`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
