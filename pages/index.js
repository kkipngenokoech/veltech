" use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Footer from "@/app/components/footer";
import VelTechNavbar from "@/app/components/navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

import Slider from "react-slick";
import { fetchAlbums } from "./api/service";
import Album from "@/app/components/album";

export async function getServerSideProps() {
  const albums = (await fetchAlbums()).slice(0, 6);
  return { props: { albums } };
}

export default function LandingPage({ albums }) {
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
      <>
        <div className="fixed top-0 left-0 w-full z-50">
          <VelTechNavbar />
        </div>

        <div className="lg:bg-hero-pattern bg-cover h-screen flex items-center justify-center relative">
          <div className="flex flex-col md:flex-row items-center">
            <span className="p-2 md:p-4 text-lg font-bold text-blue-500 w-full md:w-1/3 animate-fade-in-out leading-loose">
              {heros[index]}
            </span>
            <Button
              variant="contained"
              color="primary"
              className="text-black hover:text-white"
            >
              Hello World
            </Button>
          </div>
        </div>
        <div className="bg-beige p-8 py-8 sm:py-16 ">
          <StatsSection />
        </div>
        <AboutUsSection />
        <FeaturedAlbumsSection albums={albums} />
        <CallToActionSection />
        <NewsletterSection />
        <Footer />
      </>
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
                    <CountUp
                      start={0}
                      end={isVisible ? stat.value : 0}
                      duration={2.75}
                    />
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
    title: "Our Story",
    href: "#",
    description:
      "EverydayVisa was born from a shared passion for capturing life's everyday beauty. Our journey started with a simple idea: to create a platform where individuals could seamlessly share and celebrate their daily adventures through captivating visual stories. Today, EverydayVisa is a vibrant community, weaving together diverse experiences from around the globe, turning ordinary moments into extraordinary memories.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Our Story", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Vision for the Community",
    href: "#",
    description:
      "At EverydayVisa, our vision is to foster a global community connected by a shared love for exploration and storytelling. We envision a platform where individuals from all walks of life come together to celebrate the richness of daily experiences. Our goal is to empower and inspire our community to discover, share, and connect through the universal language of visual storytelling, making EverydayVisa a cherished space for creating, preserving, and reliving meaningful memories.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Community", href: "#" },
    author: {
      name: "Luka Ayling",
      role: "Community Manager",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Founder's Message",
    href: "#",
    description:
      "Hello EverydayVisa Community,Welcome to a space where ordinary moments become extraordinary stories. As the founder, I invite you to share, connect, and celebrate the beauty of your day-to-day adventures. Together, let's turn every snapshot into a cherished memory.\nHappy exploring!",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Our Desk", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

function AboutUsSection() {
  return (
    <div className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About EverydayVisa
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore the world through EverydayVisa, where we transform daily
            moments into shared visual stories of adventure and connection.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
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
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
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
  );
}

//! Featured albums section

function FeaturedAlbumsSection({ albums }) {
  return (
    <div className="bg-beige py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            EverydayVisa Featured Albums,
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore captivating stories through EverydayVisa's featured albums.
            Each snapshot is a unique journey, inviting you to discover diverse
            experiences and celebrate the art of storytelling.
          </p>
        </div>
        <div className="mx-auto mt-10 w-full gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0">
          <Album albums={albums} />
        </div>
      </div>
    </div>
  );
}

//! Call to Action Section

function CallToActionSection() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <h2 className="text-2xl font-bold">Ready to relive your adventures?</h2>
      <p className="text-center">
        Join EverydayVisa and turn your everyday moments into shared stories and
        cherished memories.
      </p>
      <div className="flex space-x-4">
        <a
          href="/auth?authType=signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </a>
        <a
          href="/auth?authType=signup"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

//! Newsletter section

function NewsletterSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Stay in the loop with EverydayVisa's latest adventures! Subscribe
              to our newsletter for a dose of visual inspiration, featured
              albums, and exclusive updates delivered straight to your inbox.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Discover Weekly Visuals
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Explore captivating visuals from EverydayVisa's featured albums
                delivered to your inbox every week.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Zero Inbox Spam</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Enjoy a spam-free inbox! Receive only curated content and
                updates from EverydayVisa.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
