" use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const heros = [
    "Welcome to EverydayVisa! Where every photo tells a story and every album is a journey. Join us in capturing the beauty of your day-to-day adventures and sharing the moments that matter most.",
    "Hello and welcome to EverydayVisa, your passport to a world of shared memories! Embark on a visual journey with us as we celebrate the beauty of the everyday. Create your albums, share your stories, and relive the magic of your day-to-day escapades.",
    "Welcome to EverydayVisa! Your portal to a world where every photo is a visa to cherished memories. Start exploring, start sharing, and let the adventures of today become the cherished memories of tomorrow.",
    "Hello and welcome to EverydayVisa, your passport to a world of shared memories! Embark on a visual journey with us as we celebrate the beauty of the everyday. Create your albums, share your stories, and relive the magic of your day-to-day escapades.",
    "Welcome to EverydayVisa! Your portal to a world where every photo is a visa to cherished memories. Start exploring, start sharing, and let the adventures of today become the cherished memories of tomorrow.",
    "A heartfelt welcome to EverydayVisa, our community of explorers! Discover the joy of sharing your daily adventures through photos. Join us, and together let's turn the ordinary into extraordinary memories.",
    "Welcome to EverydayVisa! A place where we celebrate the beauty of everyday life. Dive into a world of shared moments, create albums of your experiences, and let's build a treasure trove of memories together.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heros.length);
    }, 30000); //
    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  function handleClick() {
    setIndex((index + 1) % heros.length);
  }
  return (
    <div>
      <div className="bg-hero-pattern bg-cover h-screen flex items-center justify-center relative">
        <span className="absolute left-5 transform text-lg font-bold text-blue-500 w-full md:w-1/3 animate-fade-in-out leading-loose">
          {heros[index]}
        </span>{" "}
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          className="text-black hover:text-white"
        >
          Hello World
        </Button>
      </div>
          <div>
              <StatsSection />
      </div>
    </div>
  );
}

//! stats for landing page
const stats = [
  { id: 1, name: "Moments shared every 24 hours", value: "100 000" },
  { id: 2, name: "Countries explored", value: "50" },
  { id: 3, name: "Total Albums shared", value: "46,000" },
];

function StatsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
