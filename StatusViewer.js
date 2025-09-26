import React, { useEffect, useState } from "react";

function StatusViewer({ socket }) {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/status")
      .then((res) => res.json())
      .then(setStatuses);

    socket.on("statusUpdate", () => {
      fetch("http://localhost:5000/status")
        .then((res) => res.json())
        .then(setStatuses);
    });
  }, [socket]);

  return (
    <div className="status-viewer">
      <h3>Status Updates</h3>
      {statuses.map((s, i) => (
        <div key={i}>
          <p>{s.user}</p>
          <img src={`http://localhost:5000/${s.filePath}`} alt="status" />
        </div>
      ))}
    </div>
  );
}

export default StatusViewer;
