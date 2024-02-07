import Footer from "@/app/components/footer";
import ImageCard from "@/app/components/imagecard";
import VelTechNavbar from "@/app/components/navbar";
import { fetchAlbum } from "./api/service";
import { useRequireAuth } from "@/app/utils/requireLoggedIn";

export async function getServerSideProps(context) {
  const { albumid } = context.query;
  const album = await fetchAlbum(albumid);
  return { props: { album } };
}

export default function individualAlbum({ album }) {
  useRequireAuth();
  const features = [
    { name: "Creator", description: `${album.wanderer.username}` },
    {
      name: "Date Uploaded",
      description: `${album.dateUploaded}`,
    },
    { name: "Times Viewed", description: `${album.timesViewed}` },
    { name: "Country", description: `${album.country}` },
    { name: "Number of Pictures", description: `${album.photos.length}` },
    {
      name: "tags",
      description: "beach, lake, summer",
    },
  ];
  return (
    <div className="bg-beige">
      <div className="fixed top-0 left-0 w-full z-50">
        <VelTechNavbar />
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {album.title}
          </h2>
          <p className="mt-4 text-gray-500">{album.description}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {album.photos.slice(0, 4).map((photo) => {
            return (
              <img
                src={photo.coverImage}
                alt={photo.description}
                className="rounded-lg bg-gray-100 object-cover w-full h-full"
              />
            );
          })}
        </div>
      </div>
      <AlbumPictures
        pictures={album.photos.slice(4)}
        wanderer={album.wanderer}
      />
      <Footer />
    </div>
  );
}

function AlbumPictures({ pictures, wanderer }) {
  return (
    <div className="bg-">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          More Images
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {pictures.map((picture) => (
            <ImageCard picture={picture} wanderer={wanderer} />
          ))}
        </div>
      </div>
    </div>
  );
}
