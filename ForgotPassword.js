function ForgotPassword({ onSwitchPage }) {
  const [phone, setPhone] = React.useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to phone: ${phone}`);
    onSwitchPage("login");
  };

  return (
    <div className="login-box">
      <h2>Forgot Password 💖</h2>
      <form onSubmit={handleReset}>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        <a href="#" onClick={() => onSwitchPage("login")}>Back to Login</a>
      </p>
    </div>
  );
}
