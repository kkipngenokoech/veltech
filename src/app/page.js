// pages/index.js
"use client";
import React from "react";
import VelTechNavbar from "./components/navbar";
import LandingPage from "./pages/landingpage";
import Footer from "./components/footer";

function Home() {
  return (
    <div className="bg-beige">
      <div className="fixed top-0 left-0 w-full z-50">
        <VelTechNavbar />
      </div>
      <LandingPage />
      <Footer />
    </div>
  );
}

export default Home;
