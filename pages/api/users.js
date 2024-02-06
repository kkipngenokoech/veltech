import fetch from "node-fetch";
import { getCodes, getName } from "country-list";

// fetching users from the JSON placeholder API
export async function fetchWanderers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  // i want to return users with their albums
  const usersWithAlbums = await Promise.all(
    users.map(async (user) => {
      const albums = await fetchAlbums(user.id);
      return { ...user, albums };
    })
  );
  return usersWithAlbums;
}

// fetching albums from the JSON placeholder API using userId for fetched users
export async function fetchAlbums(userId) {
  let url = "https://jsonplaceholder.typicode.com/albums";
  if (userId) {
    url += `?userId=${userId}`;
  }

  const res = await fetch(url);
  const albums = await res.json();

  const enhancedAlbums = albums.map((album) => ({
    ...album,
    description: getRandomDescription(),
    dateUploaded: getRandomDate(),
    country: getRandomCountry(),
  }));

  return enhancedAlbums;
}

function getRandomDate() {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);
  const end = new Date();
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0]; // format as YYYY-MM-DD
}

// function to get random country

function getRandomCountry() {
  const countryCodes = getCodes();
  const index = Math.floor(Math.random() * countryCodes.length);
  return getName(countryCodes[index]);
}

// function to get random description
function getRandomDescription() {
  const heros = [
    "Welcome to EverydayVisa! Where every photo tells a story and every album is a journey. Join us in capturing the beauty of your day-to-day adventures and sharing the moments that matter most.",
    "Hello and welcome to EverydayVisa, your passport to a world of shared memories! Embark on a visual journey with us as we celebrate the beauty of the everyday. Create your albums, share your stories, and relive the magic of your day-to-day escapades.",
    "Welcome to EverydayVisa! Your portal to a world where every photo is a visa to cherished memories. Start exploring, start sharing, and let the adventures of today become the cherished memories of tomorrow.",
    "Hello and welcome to EverydayVisa, your passport to a world of shared memories! Embark on a visual journey with us as we celebrate the beauty of the everyday. Create your albums, share your stories, and relive the magic of your day-to-day escapades.",
    "Welcome to EverydayVisa! Your portal to a world where every photo is a visa to cherished memories. Start exploring, start sharing, and let the adventures of today become the cherished memories of tomorrow.",
    "A heartfelt welcome to EverydayVisa, our community of explorers! Discover the joy of sharing your daily adventures through photos. Join us, and together let's turn the ordinary into extraordinary memories.",
    "Welcome to EverydayVisa! A place where we celebrate the beauty of everyday life. Dive into a world of shared moments, create albums of your experiences, and let's build a treasure trove of memories together.",
  ];
  const index = Math.floor(Math.random() * heros.length);
  return heros[index];
}
