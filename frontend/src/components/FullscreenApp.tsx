import React, { useState, useEffect } from "react";
import App from "../App";
import Login from "./Login";

const FullscreenApp: React.FC = () => {
  const [loginPage, setLoginPage] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  // Enter fullscreen mode
  const enterFullScreen = () => {
    const rootElement = document.getElementById("root");
    if (rootElement && !isFullScreen) {
      if (rootElement.requestFullscreen) {
        rootElement.requestFullscreen();
      } else if ((rootElement as any).mozRequestFullScreen) {
        (rootElement as any).mozRequestFullScreen();
      } else if ((rootElement as any).webkitRequestFullscreen) {
        (rootElement as any).webkitRequestFullscreen();
      } else if ((rootElement as any).msRequestFullscreen) {
        (rootElement as any).msRequestFullscreen();
      }
    }
  };

  // Detect fullscreen state changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fsElement =
        document.fullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).msFullscreenElement;

      setIsFullScreen(!!fsElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "auto" }}>
      {/* Fullscreen Button */}
      <button
        onClick={enterFullScreen}
        style={{
          display: "flex",
          writingMode: "vertical-rl",
          color: "red",
          position: "absolute",
          bottom: 10,
          left: 10,
          zIndex: 100,
        }}
      >
        KRAUSZERS
      </button>

      {/* Login Button */}
      <button
        onClick={() => setLoginPage(true)}
        style={{
          display: "flex",
          writingMode: "vertical-rl",
          color: "black",
          position: "absolute",
          bottom: 10,
          right: 10,
          zIndex: 100,
        }}
      >
        Login
      </button>

      {/* Render Login or Main App */}
      {loginPage ? <Login handleLog={setLoginPage} /> : <App />}
    </div>
  );
};

export default FullscreenApp;
