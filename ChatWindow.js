import React, { useEffect, useState } from "react";
import { fetchMessages, sendMessage } from "../api";

function ChatWindow({ socket, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    async function loadMessages() {
      try {
        const data = await fetchMessages();
        setMessages(data);
      } catch (err) {
        console.error("Error fetching messages:", err.message);
      }
    }

    loadMessages();

    // Listen for new messages in realtime
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  const handleSend = async () => {
    if (!text.trim()) return;

    try {
      // Save to backend via REST
      await sendMessage(currentUser, text);

      // Emit via socket for realtime
      socket.emit("message", { user: currentUser, text });

      setText("");
    } catch (err) {
      console.error("Error sending message:", err.message);
    }
  };

  return (
    <div className="chat-window">
      <h3>Chat</h3>
      <div className="messages">
        {messages.map((m, idx) => (
          <div key={idx}>
            <strong>{m.user}:</strong> {m.text}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
