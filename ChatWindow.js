import React, { useEffect, useState } from "react";

function ChatWindow({ socket, currentUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typingUser, setTypingUser] = useState(null);

  useEffect(() => {
    socket.on("message", (msg) => setMessages((prev) => [...prev, msg]));
    socket.on("typing", (user) => setTypingUser(user));
    socket.on("stopTyping", () => setTypingUser(null));
    socket.on("messageDelivered", (id) =>
      setMessages((prev) =>
        prev.map((m) => (m._id === id ? { ...m, delivered: true } : m))
      )
    );
    socket.on("messageRead", (id) =>
      setMessages((prev) =>
        prev.map((m) => (m._id === id ? { ...m, read: true } : m))
      )
    );
  }, [socket]);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", {
        sender: currentUser,
        receiver: "Bob", // demo user
        text: input,
      });
      setInput("");
    }
  };

  const handleTyping = () => {
    socket.emit("typing", "Bob");
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => {
      socket.emit("stopTyping", "Bob");
    }, 1500);
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`message ${m.sender === currentUser ? "me" : "them"}`}
          >
            <span>{m.text}</span>
            <small>{m.read ? "✓✓" : m.delivered ? "✓" : ""}</small>
          </div>
        ))}
        {typingUser && <p>{typingUser} is typing...</p>}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            handleTyping();
          }}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
