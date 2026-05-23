"use client";

import { use } from "react";

export default function RoomPage({ params }) {
  // Unwrap the params using React's use() hook
  const resolvedParams = use(params);
  const roomId = resolvedParams.id;

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "sans-serif" }}>
      <h2>Room Created!</h2>
      <p>Your Room ID is:</p>
      
      <div style={{ 
        fontSize: "32px", 
        fontWeight: "bold", 
        letterSpacing: "2px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        display: "inline-block",
        borderRadius: "8px",
        margin: "20px 0"
      }}>
        {roomId}
      </div>

      <p>1. Open your browser extension.<br/>2. Type in this Room ID.<br/>3. Click Sync Up.</p>
    </div>
  );
}