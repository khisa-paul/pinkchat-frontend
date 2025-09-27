function Chat({ user, onLogout }) {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input) return;
    setMessages([...messages, { user: user.username, text: input }]);
    setInput("");
  };

  return (
    <div className="chat-box">
      <h2>Welcome {user?.username} 💖</h2>
      <button onClick={onLogout}>Logout</button>
      <div className="messages">
        {messages.map((msg, i) => (
          <p key={i}><b>{msg.user}:</b> {msg.text}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
