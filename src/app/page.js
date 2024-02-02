// pages/index.js
"use client";
import { Button } from "@mui/material";
import React from "react";
import VelTechNavbar from "./components/navbar";
import LandingPage from "./pages/landingpage";

function Home() {
  return (
    <div>
      <VelTechNavbar />
      <LandingPage />
    </div>
  );
}

export default Home;
