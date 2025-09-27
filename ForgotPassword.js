<script type="text/babel">
  function ForgotPassword() {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Password reset link sent to: ${email}`);
      // Add your password reset logic here
    };

    return (
      <div>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br/>
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    );
  }

  window.ForgotPassword = ForgotPassword;
</script>
