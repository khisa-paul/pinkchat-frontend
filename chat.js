function Chat({ user, onLogout }) {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add new message
    setMessages([...messages, { user: user.username, text: input }]);
    setInput("");
  };

  return (
    <div className="chat-box">
      <header className="chat-header">
        <h2>💬 PinkChat</h2>
        <div>
          <span>Logged in as <b>{user?.username}</b></span>
          <button onClick={onLogout}>Logout</button>
        </div>
      </header>

      <div className="messages">
        {messages.length === 0 ? (
          <p className="empty">No messages yet. Start chatting 💖</p>
        ) : (
          messages.map((msg, i) => (
            <p key={i}>
              <b>{msg.user}:</b> {msg.text}
            </p>
          ))
        )}
      </div>

      <form onSubmit={sendMessage} className="chat-input">
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
