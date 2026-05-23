"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const createRoom = () => {
    // Generate a random 6-character string for the room ID
    const randomId = Math.random().toString(36).substring(2, 8);
    router.push(`/room/${randomId}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "sans-serif" }}>
      <h1>Welcome to SynKingg 👑</h1>
      <p>The universal watch party sync clock.</p>
      <button 
        onClick={createRoom}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Create a Sync Room
      </button>
    </div>
  );
}