import React from "react";

export default function Chat({ user }) {
  return (
    <div className="chat">
      <h2>Welcome {user.username} 💖</h2>
      <p>Your phone: {user.phone}</p>
      <p>Chat system coming soon...</p>
    </div>
  );
}
