import React, { useState } from "react";
import { uploadStatus } from "../api";

function StatusUploader({ socket, currentUser }) {
  const [text, setText] = useState("");

  const handleUpload = async () => {
    if (!text.trim()) return;

    try {
      // Save to backend via REST API
      await uploadStatus(currentUser, text);

      // Also emit via socket.io for realtime updates
      socket.emit("status", { user: currentUser, text });

      setText("");
    } catch (err) {
      console.error("Error uploading status:", err.message);
    }
  };

  return (
    <div className="status-uploader">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <button onClick={handleUpload}>Post Status</button>
    </div>
  );
}

export default StatusUploader;
