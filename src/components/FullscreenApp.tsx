import React, { useState } from "react";
import App from "../App";
import Login from "./Login";

const FullscreenApp: React.FC = () => {
  const [loginPage, setLoginPage] = useState<boolean>(false);

  const enterFullScreen = () => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
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

  const handleLogin = (value: boolean) => {
    setLoginPage(value);
  };

  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "auto" }}>
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
      <button onClick={() => handleLogin(true)}
          style={{
            display: "flex",
            writingMode: "vertical-rl",
            color: "black",
            position: "absolute",
            bottom: 10,
            right: 10,
            zIndex: 100,
          }}
          >Login</button>
      {loginPage ? <Login handleLog={handleLogin} /> : <App />}
    </div>
  );
};

export default FullscreenApp;
