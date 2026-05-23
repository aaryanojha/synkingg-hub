"use client";

import { useState, useEffect } from "react";

export default function Home() {
  // We use React state to track which image is currently showing
  const [currentBg, setCurrentBg] = useState(0);

  // Verified, high-quality wide backdrop images
  const movieScreens = [
    
 
    "https://image.tmdb.org/t/p/w1280/hziiv14OpD73u9gAak4XDDfBKa2.jpg", // Harry Potter
   
    "https://images4.alphacoders.com/100/thumb-1920-1001038.jpg",
    "https://image.tmdb.org/t/p/w1280/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg", // The Dark Knight

  ];

  // This effect runs an automatic timer to swap the image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % movieScreens.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(timer);
  }, [movieScreens.length]);

  // CSS for button hover effects
  const globalStyles = `
    .cta-button {
      display: inline-block;
      padding: 18px 45px;
      font-size: 1.2rem;
      font-weight: bold;
      background: #e60000;
      color: white;
      text-decoration: none;
      border-radius: 50px;
      box-shadow: 0 10px 25px rgba(230, 0, 0, 0.4);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(230, 0, 0, 0.6);
    }
  `;

  return (
    <>
      <style>{globalStyles}</style>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000", // Black base for a cinematic feel
          color: "#fff", // White text to contrast with dark backgrounds
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* --- Background Image Slideshow Layer --- */}
        {movieScreens.map((imgUrl, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
              // The magic happens here: opacity fades in/out, transitioning over 1.5 seconds
              opacity: currentBg === index ? 0.6 : 0, 
              transition: "opacity 1.5s ease-in-out",
            }}
          ></div>
        ))}

        {/* --- Vignette & Red Glow Overlays --- */}
        {/* Adds a dark gradient overlay so the text is always readable regardless of the image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-10%",
            width: "700px",
            height: "700px",
            background: "#ff4d4d",
            filter: "blur(180px)",
            opacity: 0.25,
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "-10%",
            width: "700px",
            height: "700px",
            background: "#e60000",
            filter: "blur(180px)",
            opacity: 0.2,
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>

        {/* --- Main Content Container --- */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
          <h1
            style={{
              fontSize: "6rem", // Made slightly larger for impact
              fontWeight: "900",
              margin: "0 0 10px 0",
              lineHeight: "1",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textShadow: "0px 4px 20px rgba(0,0,0,0.8)", // Heavy drop shadow for readability
            }}
          >
            SynKingg
            <img
              src="/crown.png"
              alt="crown"
              style={{
                width: "0.8em",
                height: "0.8em",
                marginLeft: "15px",
                filter: "drop-shadow(0px 4px 10px rgba(0,0,0,0.5))"
              }}
            />
          </h1>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#ff4d4d", // Brighter red for dark mode
              margin: "0 0 30px 0",
              textTransform: "uppercase",
              letterSpacing: "3px",
              textShadow: "0px 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            The Universal Watch Party
          </p>

          <h1
            style={{
              fontSize: "4.5rem",
              fontWeight: "900",
              letterSpacing: "-2px",
              margin: "0 0 20px 0",
              lineHeight: "1.1",
              textShadow: "0px 4px 20px rgba(0,0,0,0.8)",
            }}
          >
            Watch together. <br />
            <span
              style={{
                background: "linear-gradient(to right, #ff4d4d 0%, #ff9999 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              In perfect sync.
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#ccc",
              margin: "0 auto 40px auto",
              maxWidth: "600px",
              lineHeight: "1.6",
              fontWeight: "500",
              textShadow: "0px 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            The ultimate Chrome extension for synchronized streaming. Host watch
            parties on your favorite sites with real-time chat and zero lag.
          </p>

          <a
            href="/Synkingg.zip"
            download="Synkingg.zip"
            className="cta-button"
          >
            Add to Chrome — It is Free
          </a>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.9rem",
              color: "#aaa",
              fontWeight: "500",
              textShadow: "0px 1px 5px rgba(0,0,0,0.8)",
            }}
          >
            Installs in seconds. No account required to join rooms.
          </p>
        </div>
      </div>
    </>
  );
}