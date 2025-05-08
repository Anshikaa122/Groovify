import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    const uploadedSongs = JSON.parse(localStorage.getItem("uploadedSongs")) || [];

    const allSongs = [...songsData, ...uploadedSongs];
    const filtered = allSongs.filter((song) =>
      song.name.toLowerCase().includes(query)
    );

    setResults(filtered);
  }, [query]);

  return (
    <div className="text-white px-6 py-4">
      <h1 className="text-3xl font-bold mb-4">Search Results for {query}</h1>
      {results.length === 0 ? (
        <p>No matching songs found.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {results.map((song) => (
            <SongItem
              key={song.id}
              name={song.name}
              desc={song.desc}
              id={song.id}
              image={song.image}
              audioUrl={song.audioUrl}
              isUploaded={!!song.audioUrl}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
