import React, { useEffect, useState } from "react";

function StatusViewer({ socket }) {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    socket.on("receiveStatus", (status) => {
      setStatuses((prev) => [...prev, status]);
    });
    return () => socket.off("receiveStatus");
  }, [socket]);

  return (
    <div className="status-viewer">
      <h3>Statuses</h3>
      {statuses.map((s, i) => (
        <div key={i}>
          <b>{s.user}: </b> {s.text}
        </div>
      ))}
    </div>
  );
}

export default StatusViewer;
