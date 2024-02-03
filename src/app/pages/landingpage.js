" use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import AlbumCard from "../components/album";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const albums = [
    { id: 1, coverImage: '/images/cover-photo.jpg', title: 'Album 1', description: 'Description 1', dateUploaded: 'Date 1', country: 'Country 1' },
    { id: 1, coverImage: '/images/cover-photo.jpg', title: 'Album 1', description: 'Description 1', dateUploaded: 'Date 1', country: 'Country 1' },
    { id: 1, coverImage: '/images/cover-photo.jpg', title: 'Album 1', description: 'Description 1', dateUploaded: 'Date 1', country: 'Country 1' },
    { id: 1, coverImage: '/images/cover-photo.jpg', title: 'Album 1', description: 'Description 1', dateUploaded: 'Date 1', country: 'Country 1' },
    { id: 1, coverImage: '/images/cover-photo.jpg', title: 'Album 1', description: 'Description 1', dateUploaded: 'Date 1', country: 'Country 1' },
    { id: 1, coverImage: '/images/cover-photo.jpg', title: 'Album 1', description: 'Description 1', dateUploaded: 'Date 1', country: 'Country 1' },
    { id: 1, coverImage: '/images/cover-photo.jpg', title: 'Album 1', description: 'Description 1', dateUploaded: 'Date 1', country: 'Country 1' },
    // Add more albums here...
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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heros.length);
    }, 30000); //
    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  
  return (
    <div className="bg-beige">
      <div className="bg-hero-pattern bg-cover h-screen flex items-center justify-center relative">
        <span className="absolute left-5 transform text-lg font-bold text-blue-500 w-full md:w-1/3 animate-fade-in-out leading-loose">
          {heros[index]}
        </span>{" "}
        <Button
          
          variant="contained"
          color="primary"
          className="text-black hover:text-white"
        >
          Hello World
        </Button>
      </div>
          <div className="bg-beige p-8 py-24 sm:py-32 ">
              <StatsSection />
          </div>
          <div>
              <AboutUsSection />
          </div>
          <div>
              <FeaturedAlbumsSection albums={albums} /> 
          </div>

    </div>
  );
}

//! stats for landing pageExplore the world through EverydayVisa, where we transform daily moments into shared visual stories of adventure and connection.
const stats = [
  { id: 1, name: "Moments shared every 24 hours", value: 100000 },
  { id: 2, name: "Countries explored", value: 50 },
  { id: 3, name: "Total Albums shared", value: 46000 },
];

function StatsSection() {
  return (
    <div className="bg-white py-24 sm:py-32 rounded-lg shadow-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                  {({ isVisible }) => (
                    <CountUp start={0} end={isVisible ? stat.value : 0} duration={2.75} />
                  )}
                </VisibilitySensor>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}



//! about us section

const posts = [
  {
    id: 1,
    title: 'Our Story',
    href: '#',
    description:
      "EverydayVisa was born from a shared passion for capturing life's everyday beauty. Our journey started with a simple idea: to create a platform where individuals could seamlessly share and celebrate their daily adventures through captivating visual stories. Today, EverydayVisa is a vibrant community, weaving together diverse experiences from around the globe, turning ordinary moments into extraordinary memories.",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Our Story', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    {
    id: 2,
    title: 'Vision for the Community',
    href: '#',
    description:
      "At EverydayVisa, our vision is to foster a global community connected by a shared love for exploration and storytelling. We envision a platform where individuals from all walks of life come together to celebrate the richness of daily experiences. Our goal is to empower and inspire our community to discover, share, and connect through the universal language of visual storytelling, making EverydayVisa a cherished space for creating, preserving, and reliving meaningful memories.",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Community', href: '#' },
    author: {
      name: 'Luka Ayling',
      role: 'Community Manager',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    {
    id: 3,
    title: 'Founder\'s Message',
    href: '#',
    description:
      "Hello EverydayVisa Community,Welcome to a space where ordinary moments become extraordinary stories. As the founder, I invite you to share, connect, and celebrate the beauty of your day-to-day adventures. Together, let's turn every snapshot into a cherished memory.\nHappy exploring!",
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    },
    
  // More posts...
]

function AboutUsSection() {
  return (
    <div className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About EverydayVisa</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore the world through EverydayVisa, where we transform daily moments into shared visual stories of adventure and connection.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}


//! Featured albums section



function FeaturedAlbumsSection({ albums }) {
     const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    swipe: true,
    swipeToSlide: true,
    centerMode: true, // Enable center mode
    centerPadding: '60px', // Add padding either side of the slides
  };
  return (
    <div className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">EverydayVisa Featured Albums</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
             Explore captivating stories through EverydayVisa's featured albums. Each snapshot is a unique journey, inviting you to discover diverse experiences and celebrate the art of storytelling.
          </p>
        </div>
        <div className="mx-auto mt-10 w-full gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0">
          <Slider {...settings}>
            {albums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}