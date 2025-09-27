function App() {
  const [page, setPage] = React.useState("login");
  const [user, setUser] = React.useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage("chat");
  };

  return (
    <div className="app">
      {page === "login" && <Login onLogin={handleLogin} onSwitchPage={setPage} />}
      {page === "register" && <Register onSwitchPage={setPage} />}
      {page === "forgot" && <ForgotPassword onSwitchPage={setPage} />}
      {page === "chat" && <Chat user={user} onLogout={() => setPage("login")} />}
    </div>
  );
}
