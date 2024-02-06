import { getCodes, getName } from 'country-list';
export default async function Landinghandler(req, res) {
  try {
    const albumResponse = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
    );
    const albums = await albumResponse.json();

    const photoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const photos = await photoResponse.json();

    const data = albums.map((album, index) => {
      // Filter photos by album ID
      const albumPhotos = photos.filter((photo) => photo.albumId === album.id);

      // Select a random photo
      const randomPhoto =
        albumPhotos[Math.floor(Math.random() * albumPhotos.length)];

      return {
        id: album.id,

        coverImage: randomPhoto
          ? randomPhoto.thumbnailUrl
          : "/images/placeholder.jpg", // Use a placeholder image if no photo was found
        title: album.title,
        description: `Description ${index + 1}`,
        dateUploaded:getRandomDate(),
        country: getRandomCountry(),
      };
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// function to get random date
function getRandomDate() {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // format as YYYY-MM-DD
}

// function to get random country


function getRandomCountry() {
  const countryCodes = getCodes();
  const index = Math.floor(Math.random() * countryCodes.length);
  return getName(countryCodes[index]);
}
