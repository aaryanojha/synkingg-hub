"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function JoinPage() {
  const router = useRouter();
  const [status, setStatus] = useState("Checking for SynKingg Extension...");

  useEffect(() => {
    // We wait 800 milliseconds to give the extension time to load and inject its flag
    const checkExtension = setTimeout(() => {
      const isInstalled = document.getElementById("synkingg-extension-installed");

      if (isInstalled) {
        setStatus("Extension found! Getting your room ready...");
        // If they have it, you can redirect them to the actual video site here
        // Example: window.location.href = "https://netflix.com/watch/123?sk_room=ABC";
      } else {
        setStatus("Extension not found. Redirecting to download page...");
        // If they don't have it, send them to the homepage to download the zip
        router.push("/"); 
      }
    }, 800);

    return () => clearTimeout(checkExtension);
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fffcfc',
      fontFamily: 'system-ui, sans-serif',
      color: '#1a1a1a'
    }}>
      {/* A simple loading spinner UI */}
      <div style={{
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #e60000',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }}></div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{status}</h2>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}