import React, { useEffect, useState } from "react";
import { fetchStatuses } from "../api";

function StatusViewer({ socket }) {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    async function loadStatuses() {
      try {
        const data = await fetchStatuses();
        setStatuses(data);
      } catch (err) {
        console.error("Error fetching statuses:", err.message);
      }
    }

    loadStatuses();

    // Listen for live updates from socket.io
    socket.on("status", (status) => {
      setStatuses((prev) => [status, ...prev]);
    });

    return () => {
      socket.off("status");
    };
  }, [socket]);

  return (
    <div className="status-viewer">
      <h3>Statuses</h3>
      <ul>
        {statuses.map((s, idx) => (
          <li key={idx}>
            <strong>{s.user}:</strong> {s.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatusViewer;
