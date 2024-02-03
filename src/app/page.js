// pages/index.js
"use client";
import React from "react";
import VelTechNavbar from "./components/navbar";
import LandingPage from "./pages/landingpage";

function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50">
        <VelTechNavbar />
      </div>
      <LandingPage />
    </div>
  );
}

export default Home;
