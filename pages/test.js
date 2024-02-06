// import React, { useState, useEffect } from "react";


// function MyComponent() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch("/api/landing");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = (await response.json()).slice(0, 6);
//         setData(data);
//       } catch (error) {
//         setError(error.message);
//       }
//       setIsLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!data) {
//     return null;
//   }

//   return (
//     <div>
//       <DataDisplayComponent data={data} /> {/* pass the data as a prop */}
//     </div>
//   );
// }

// export default MyComponent;



// function DataDisplayComponent({ data }) { // destructure data from props
//   return (
//     <div>
//       {/* Render your data here */}
//       {data.map((item, index) => (
//         <div key={index}>
//           <h2>{item.title}</h2>
//           <img src={item.coverImage} alt={item.title} />
//           <p>{item.description}</p>
//           {/* Render other properties of the item */}
//         </div>
//       ))}
//     </div>
//   );
// }




" use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const albums = [
  {
    id: 1,
    coverImage: "/images/cover-photo.jpg",
    title: "Album 1",
    description: "Description 1",
    dateUploaded: "Date 1",
    country: "Country 1",
  },
];

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
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heros.length);
    }, 30000); //
    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/landing");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()).slice(0, 6);
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  

  return (
  <div className="bg-beige">
    {isLoading ? (
      <div>Loading...</div>
          ) : <div>{data.length}</div>
    //(
    //   <>import React, { useState, useEffect } from "react";


// function MyComponent() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await fetch("/api/landing");
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = (await response.json()).slice(0, 6);
//         setData(data);
//       } catch (error) {
//         setError(error.message);
//       }
//       setIsLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!data) {
//     return null;
//   }

//   return (
//     <div>
//       <DataDisplayComponent data={data} /> {/* pass the data as a prop */}
//     </div>
//   );
// }

// export default MyComponent;



// function DataDisplayComponent({ data }) { // destructure data from props
//   return (
//     <div>
//       {/* Render your data here */}
//       {data.map((item, index) => (
//         <div key={index}>
//           <h2>{item.title}</h2>
//           <img src={item.coverImage} alt={item.title} />
//           <p>{item.description}</p>
//           {/* Render other properties of the item */}
//         </div>
//       ))}
//     </div>
//   );
// }


    //     <div className="bg-hero-pattern bg-cover h-screen flex items-center justify-center relative">
    //       <span className="absolute left-5 transform text-lg font-bold text-blue-500 w-full md:w-1/3 animate-fade-in-out leading-loose">
    //         {heros[index]}
    //       </span>{" "}
    //       <Button
    //         variant="contained"
    //         color="primary"
    //         className="text-black hover:text-white"
    //       >
    //         Hello World
    //       </Button>
    //     </div>
    //     <div className="bg-beige p-8 py-24 sm:py-32 ">
    //       <StatsSection />
    //       <AboutUsSection />
    //       <FeaturedAlbumsSection albums={albumCards} />
    //       <CallToActionSection />
    //       <NewsletterSection />
    //     </div>
    //   </>
    // )
  }
  </div>
);
}