import { useState } from "react";
import ImageModal from "./image";

export default function ImageCard({ picture, wanderer }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        key={picture.id}
        className="group relative"
        onClick={() => setOpen(true)}
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={picture.coverImage}
            alt={picture.description}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{picture.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{picture.dateUploaded}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{picture.country}</p>
        </div>
      </div>

      <ImageModal
        open={open}
        setOpen={setOpen}
        image={picture}
        wanderer={wanderer}
      />
    </div>
  );
}
