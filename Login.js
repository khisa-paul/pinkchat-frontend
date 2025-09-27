function Login({ onLogin, onSwitchPage }) {
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && phone) {
      onLogin({ username, phone });
    } else {
      alert("Please enter both username and phone number.");
    }
  };

  return (
    <div className="login-box">
      <h2>Login to PinkChat 💖</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <a href="#" onClick={() => onSwitchPage("register")}>Register</a>
      </p>
      <p>
        <a href="#" onClick={() => onSwitchPage("forgot")}>Forgot Password?</a>
      </p>
    </div>
  );
}
