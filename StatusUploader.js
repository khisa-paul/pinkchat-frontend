import React, { useState } from "react";

function StatusUploader({ socket, currentUser }) {
  const [file, setFile] = useState(null);

  const uploadStatus = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("status", file);
    formData.append("user", currentUser);

    await fetch("http://localhost:5000/status", {
      method: "POST",
      body: formData,
    });

    socket.emit("statusUpdate", currentUser);
  };

  return (
    <div className="status-uploader">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadStatus}>Post Status</button>
    </div>
  );
}

export default StatusUploader;
