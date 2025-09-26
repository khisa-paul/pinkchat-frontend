// src/components/StatusViewer.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../config";

function StatusViewer({ socket }) {
  const [statuses, setStatuses] = useState([]);

  // ✅ Fetch statuses from backend
  useEffect(() => {
    const fetchStatuses = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/statuses`);
        setStatuses(res.data);
      } catch (err) {
        console.error("Failed to fetch statuses:", err);
      }
    };
    fetchStatuses();
  }, []);

  return (
    <div className="status-viewer">
      <h3>Status Updates</h3>
      {statuses.map((status, i) => (
        <div key={i} className="status-item">
          <strong>{status.user}</strong>
          {status.text && <p>{status.text}</p>}
          {status.imageUrl && <img src={status.imageUrl} alt="status" />}
        </div>
      ))}
    </div>
  );
}

export default StatusViewer;
