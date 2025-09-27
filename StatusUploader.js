import React, { useState } from "react";

function StatusUploader({ socket, currentUser }) {
  const [status, setStatus] = useState("");

  const uploadStatus = () => {
    if (!status) return;
    socket.emit("sendStatus", { user: currentUser.username, text: status });
    setStatus("");
  };

  return (
    <div className="status-uploader">
      <input
        type="text"
        placeholder="Post a status..."
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button onClick={uploadStatus}>Post</button>
    </div>
  );
}

export default StatusUploader;
