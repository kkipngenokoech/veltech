import React from "react";

function AlbumCard({ album }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
      <img className="w-full" src={album.coverImage} alt={album.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{album.title}</div>
        <p className="text-gray-700 text-base">{album.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {album.dateUploaded}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {album.country}
        </span>
      </div>
    </div>
  );
}

export default AlbumCard;
