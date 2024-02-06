import Album from "@/app/components/album";
import AlbumCard from "@/app/components/albumcard";
import Footer from "@/app/components/footer";
import VelTechNavbar from "@/app/components/navbar";
import { useEffect, useState } from "react";

export default function Gallery() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [albumCards, setAlbumCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/landing");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAlbumCards(data);
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
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!albumCards) {
    return null;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!albumCards) {
    return null;
  }
  const users = [
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["music", "albums", "artist"],
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["songs", "artist", "popular"],
    },
    {
      id: 3,
      name: "Bob Johnson",
      image: "https://via.placeholder.com/150",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["music", "artist", "new"],
    },
  ];
  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full z-30">
        <VelTechNavbar />
      </div>
      <div className="pt-16">
        <div className="p-8">
          <TrendingAlbums albums={albumCards.slice(0, 8)} />
          <LatestUploads albums={albumCards.slice(9, 14)} />
          <UserSpotlight users={users} />
        </div>
        <Album cards={albumCards} />
      </div>

      <Footer />
    </div>
  );
}

function TrendingAlbums({ albums }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Trending Albums of the Week</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {albums.map((album) => (
          <AlbumCard album={album} />
        ))}
      </div>
    </div>
  );
}

function LatestUploads({ albums }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Latest Uploads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {albums.map((album) => (
          <AlbumCard album={album} />
        ))}
      </div>
    </div>
  );
}

function UserSpotlight({ users }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">This Week's User Spotlight</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users && users.map((user) => <UserSpotlightCard user={user} />)}
      </div>
    </div>
  );
}

function UserSpotlightCard({ user }) {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={user.image}
        alt={user.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">{user.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {user.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
