function App() {
  const [page, setPage] = React.useState("login");
  const [user, setUser] = React.useState(null);

  return (
    <div className="app">
      {page === "login" && <Login onLogin={setUser} onNavigate={setPage} />}
      {page === "register" && <Register onNavigate={setPage} />}
      {page === "forgot" && <ForgotPassword onNavigate={setPage} />}
      {page === "chat" && <Chat user={user} onLogout={() => setPage("login")} />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
