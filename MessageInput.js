import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() === "") return;
    onSend(text);
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        style={styles.input}
      />
      <button onClick={handleSend} style={styles.button}>
        Send
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff"
  },
  input: {
    flex: 1,
    padding: "8px 12px",
    fontSize: "16px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    outline: "none",
    marginRight: "8px"
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "pink",
    color: "#fff",
    cursor: "pointer"
  }
};

export default MessageInput;
