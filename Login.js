<script type="text/babel">
  function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Email: ${email}\nPassword: ${password}`);
      // Add your login logic here
    };

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  window.Login = Login;
</script>
