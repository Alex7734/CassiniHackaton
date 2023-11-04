import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { withErrorHandler } from "@/error-handling";
import AppErrorBoundaryFallback from "@/error-handling/fallbacks/App";
import Pages from "@/routes/Pages";
import Notifications from "@/sections/Notifications";
import SW from "@/sections/SW";
import Sidebar from "@/sections/Sidebar";
import Login from "./components/LogIn/LogIn";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn") === "true"
  );
  const [showSplashScreen, setShowSplashScreen] = useState(!loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      setTimeout(() => {
        setShowSplashScreen(false);
      }, 2000);
    }
  }, [loggedIn]);

  const handleLogin = () => {
    setLoggedIn(true);
    sessionStorage.setItem("isLoggedIn", "true");
  };

  return (
    <>
      <CssBaseline />
      {showSplashScreen ? (
        <SplashScreen />
      ) : loggedIn ? (
        <>
          <Notifications />
          <SW />
          <BrowserRouter>
            <Sidebar />
            <Pages />
          </BrowserRouter>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
