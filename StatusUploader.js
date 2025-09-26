// src/components/StatusUploader.js
import React, { useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function StatusUploader({ currentUser }) {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const uploadStatus = async () => {
    if (!text && !imageUrl) return;

    try {
      await axios.post(`${API_BASE}/api/statuses`, {
        user: currentUser,
        text,
        imageUrl,
      });
      setText("");
      setImageUrl("");
      alert("✅ Status uploaded!");
    } catch (err) {
      console.error("Failed to upload status:", err);
    }
  };

  return (
    <div className="status-uploader">
      <h3>Post a Status</h3>
      <input
        type="text"
        value={text}
        placeholder="Say something..."
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        value={imageUrl}
        placeholder="Image URL"
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={uploadStatus}>Post</button>
    </div>
  );
}

export default StatusUploader;
