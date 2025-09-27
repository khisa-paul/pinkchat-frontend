function Register({ onSwitchPage }) {
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Account created for ${username} (${phone}) 🎉`);
    onSwitchPage("login");
  };

  return (
    <div className="login-box">
      <h2>Register for PinkChat 💖</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Choose Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="#" onClick={() => onSwitchPage("login")}>Login</a>
      </p>
    </div>
  );
}
