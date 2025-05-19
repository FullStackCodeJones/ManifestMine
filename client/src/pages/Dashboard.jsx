import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#008080", marginBottom: "1rem" }}>
        👑 ManifestMine Dashboard
      </h2>

      <p style={{ fontSize: "1.1rem" }}>
        Welcome back! Here's where you manage your dreams, track your Bitcoin
        savings, and build your legacy one goal at a time.
      </p>

      <nav style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <Link to="/vision-board">🖼️ Vision Board</Link>
        <Link to="/vault">💰 Vault</Link>
        <Link to="/journal">📓 Journal</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
