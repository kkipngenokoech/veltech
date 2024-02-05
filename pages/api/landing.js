// pages/api/landing.js
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
        coverImage: randomPhoto ? randomPhoto.url : "/images/placeholder.jpg", // Use a placeholder image if no photo was found
        title: album.title,
        description: `Description ${index + 1}`,
        dateUploaded: `Date ${index + 1}`,
        country: `Country ${index + 1}`,
      };
    });

      res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
