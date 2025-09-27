import { API_BASE } from "./config.js";

let socket = null;
let currentUser = null;

const root = document.getElementById("root");

// ---------- Login UI ----------
function renderLogin() {
  root.innerHTML = `
    <div class="login">
      <h2>Login to PinkChat 💖</h2>
      <input id="username" type="text" placeholder="Username" />
      <input id="phone" type="text" placeholder="Phone number" />
      <button id="loginBtn">Login</button>
    </div>
  `;

  document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!username || !phone) {
      alert("Please enter both username and phone number!");
      return;
    }

    currentUser = { username, phone };

    connectSocket();
    renderChat();
  });
}

// ---------- Chat UI ----------
function renderChat() {
  root.innerHTML = `
    <header class="header">💖 PinkChat - ${currentUser.username}</header>
    <div class="main">
      <div class="chat">
        <div id="messages"></div>
        <input id="msgInput" type="text" placeholder="Type a message..." />
        <button id="sendBtn">Send</button>
      </div>
      <aside>
        <h3>Status</h3>
        <p>Coming soon...</p>
      </aside>
    </div>
  `;

  document.getElementById("sendBtn").addEventListener("click", sendMessage);
}

// ---------- Socket.IO ----------
function connectSocket() {
  socket = io(API_BASE, {
    transports: ["websocket"],
    withCredentials: true,
  });

  socket.on("connect", () => {
    console.log("🟢 Connected:", socket.id);
  });

  socket.on("receiveMessage", (data) => {
    showMessage(data);
  });
}

function sendMessage() {
  const input = document.getElementById("msgInput");
  const message = input.value.trim();
  if (!message) return;

  const data = {
    user: currentUser.username,
    phone: currentUser.phone,
    text: message,
  };

  socket.emit("sendMessage", data);
  input.value = "";
}

function showMessage(data) {
  const messagesDiv = document.getElementById("messages");
  const div = document.createElement("div");
  div.textContent = `${data.user} (${data.phone}): ${data.text}`;
  messagesDiv.appendChild(div);
}

// ---------- Start ----------
renderLogin();
