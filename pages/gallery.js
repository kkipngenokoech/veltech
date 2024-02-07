import Album from "@/app/components/album";
import AlbumCard from "@/app/components/albumcard";
import Footer from "@/app/components/footer";
import VelTechNavbar from "@/app/components/navbar";
import { fetchAlbums } from "./api/service";

export async function getServerSideProps() {
  const albums = await fetchAlbums();
  return { props: { albums } };
}

export default function Gallery({ albums }) {
  const users = [
  {
    id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    description: "An intrepid explorer of everyday moments, capturing the beauty of life's adventures through the lens of a camera.",
    tags: ["explorer", "photography", "adventurer"],
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    description: "A visual storyteller weaving tales of discovery and connection. Join me on a journey through the extraordinary in the ordinary.",
    tags: ["storyteller", "visual", "connection"],
  },
  {
    id: 3,
    name: "Bob Johnson",
    image: "https://via.placeholder.com/150",
    description: "Embarking on a quest to unveil the hidden gems of our world. Through each image, I invite you to see the magic in the mundane.",
    tags: ["explorer", "discovery", "magic"],
  },
];


  return (
    <div className="bg-beige">
      <div className="fixed top-0 left-0 w-full z-30">
        <VelTechNavbar />
      </div>
      <div className="pt-16">
        <div className="p-8">
          <TrendingAlbums albums={albums.slice(0, 8)} />
          <LatestUploads albums={albums.slice(9, 14)} />
          <UserSpotlight users={users} />
        </div>
        <Album albums={albums} />
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
        src={"https://source.unsplash.com/random/?user"}
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
