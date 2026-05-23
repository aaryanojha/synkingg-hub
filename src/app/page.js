"use client";

export default function Home() {
  // CSS for the background animations
  const marqueeAnimation = `
    @keyframes scrollHorizontal {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
  `;

  // Expanded list of high-quality wide backdrop images
  const movieScreens = [
    {
      title: "Naruto",
      img: "https://image.tmdb.org/t/p/w780/vlv1gn98GqOU1H3mOAAuWp358wB.jpg",
    },
    {
      title: "Spider-Man",
      img: "https://image.tmdb.org/t/p/w780/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    },
    {
      title: "Avengers",
      img: "https://image.tmdb.org/t/p/w780/orjiB3oUIsFiAWrvIequBjwzPIm.jpg",
    },
    {
      title: "Attack on Titan",
      img: "https://image.tmdb.org/t/p/w780/vu5CGwHNAOa4h1Z2A8HkQ8DndyC.jpg",
    },
    {
      title: "Demon Slayer",
      img: "https://image.tmdb.org/t/p/w780/3T9H9L4xY3rJlsfQ4eL9p0R0Dq6.jpg",
    },
    {
      title: "Harry Potter",
      img: "https://image.tmdb.org/t/p/w780/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    },
    {
      title: "Interstellar",
      img: "https://image.tmdb.org/t/p/w780/xJHwPuOO3GUTe17yE34sWExAzyO.jpg",
    },
    {
      title: "Dragon Ball Z",
      img: "https://image.tmdb.org/t/p/w780/A6BCAX5OaIfpA7k235B4Q7LwNnA.jpg",
    },
    {
      title: "Stranger Things",
      img: "https://image.tmdb.org/t/p/w780/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    },
    {
      title: "The Dark Knight",
      img: "https://image.tmdb.org/t/p/w780/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    },
    {
      title: "One Piece",
      img: "https://image.tmdb.org/t/p/w780/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
    },
    {
      title: "Marvel",
      img: "https://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    },
    {
      title: "The Matrix",
      img: "https://image.tmdb.org/t/p/w780/lMnoYqPIsWNmHGAa4N44S7DqA1n.jpg",
    },
    {
      title: "Lord of the Rings",
      img: "https://image.tmdb.org/t/p/w780/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
    },
    {
      title: "Star Wars",
      img: "https://image.tmdb.org/t/p/w780/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
    },
  ];

  // Utility to render a moving row
  const renderScrollRow = (screens, speed, direction = "normal") => {
    // Duplicate the screens to make the loop seamless
    const seamlessScreens = [...screens, ...screens];

    return (
      <div
        style={{
          display: "flex",
          width: "calc(200% + 20px)", // accommodate duplicate items + gap
          animation: `scrollHorizontal ${speed}s linear infinite ${direction}`,
          gap: "20px",
          opacity: 0.35, // Adjusted opacity so images look good but don't hide text
        }}
      >
        {seamlessScreens.map((screen, index) => (
          <div
            key={index}
            style={{
              width: "280px",
              height: "150px",
              backgroundImage: `url(${screen.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              flexShrink: 0,
              border: "2px solid rgba(255, 255, 255, 0.5)",
            }}
          ></div>
        ))}
      </div>
    );
  };

  // We slice the array differently for each row so they don't look perfectly aligned vertically
  const row1 = [...movieScreens.slice(0, 8), ...movieScreens.slice(8)];
  const row2 = [
    ...movieScreens.slice(5, 13),
    ...movieScreens.slice(0, 5),
    ...movieScreens.slice(13),
  ];
  const row3 = [...movieScreens.slice(10), ...movieScreens.slice(0, 10)];

  return (
    <>
      <style>{marqueeAnimation}</style>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fffcfc", // Very bright, nearly white base
          color: "#1a1a1a",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* --- Background Movie/Anime Screens Layer --- */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            padding: "25px 0",
            justifyContent: "space-around",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          {renderScrollRow(row1, 70)} {/* Slow row */}
          {renderScrollRow(row2, 50, "reverse")} {/* Medium, reversed row */}
          {renderScrollRow(row3, 60)} {/* Slightly faster row */}
        </div>

        {/* --- Red Theme Glow Overlays --- */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            width: "700px",
            height: "700px",
            background: "#ff4d4d",
            filter: "blur(150px)",
            opacity: 0.3,
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "-10%",
            width: "700px",
            height: "700px",
            background: "#e60000",
            filter: "blur(150px)",
            opacity: 0.25,
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>

        {/* --- Main Content Container --- */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
          <h1
            style={{
              fontSize: "5.5rem",
              fontWeight: "900",
              margin: "0 0 10px 0",
              lineHeight: "1",
              color: "#000",
              display: "flex", // Added to keep the crown centered with the text
              alignItems: "center", // Vertically align text and image
              justifyContent: "center",
            }}
          >
            SynKingg
            <img
              src="/crown.png"
              alt="crown"
              style={{
                width: "2em", // Slightly adjusted size to look proportional
                height: "2em",
                marginLeft: "15px",
              }}
            />
          </h1>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#e60000",
              margin: "0 0 30px 0",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            The Universal Watch Party
          </p>

          {/* Typography */}
          <h1
            style={{
              fontSize: "4.5rem",
              fontWeight: "900",
              letterSpacing: "-2px",
              margin: "0 0 20px 0",
              lineHeight: "1.1",
              textShadow: "0px 2px 10px rgba(255,255,255,0.8)",
            }}
          >
            Watch together. <br />
            <span
              style={{
                background:
                  "linear-gradient(to right, #e60000 0%, #ff6666 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              In perfect sync.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.25rem",
              color: "#333",
              margin: "0 auto 40px auto",
              maxWidth: "600px",
              lineHeight: "1.6",
              fontWeight: "600",
              textShadow: "0px 1px 5px rgba(255,255,255,0.9)",
            }}
          >
            The ultimate Chrome extension for synchronized streaming. Host watch
            parties on your favorite sites with real-time chat and zero lag.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "18px 45px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              background: "#e60000", // Solid red button
              color: "white",
              textDecoration: "none",
              borderRadius: "50px",
              boxShadow: "0 10px 25px rgba(230, 0, 0, 0.4)",
              transition: "transform 0.2s ease, boxShadow 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 15px 30px rgba(230, 0, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 10px 25px rgba(230, 0, 0, 0.4)";
            }}
          >
            Add to Chrome — It is Free
          </a>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.9rem",
              color: "#444",
              fontWeight: "600",
              textShadow: "0px 1px 3px rgba(255,255,255,0.8)",
            }}
          >
            Installs in seconds. No account required to join rooms.
          </p>
        </div>
      </div>
    </>
  );
}
