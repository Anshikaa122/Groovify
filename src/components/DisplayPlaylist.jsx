import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { songsData } from "../assets/assets";
import { PlayContext } from "../context/PlayContext";
import Navbar from "./Navbar";

const DisplayPlaylist = () => {
  const { id } = useParams();
  const { plaWithID } = useContext(PlayContext);
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userPlaylists")) || [];
    const pl = stored.find((p) => p.id.toString() === id);
    setPlaylist(pl);
  }, [id]);

  if (!playlist) {
    return <div className="text-white p-6">Playlist not found</div>;
  }

  const playlistSongs = songsData.filter((song) =>
    playlist.songs.includes(song.id)
  );

  return (
    <>
      <Navbar />
      <div className="text-white p-6">
        <h1 className="text-4xl font-bold mb-4">{playlist.name}</h1>
        {playlistSongs.length === 0 ? (
          <p>No songs added yet.</p>
        ) : (
          playlistSongs.map((song, index) => (
            <div
              key={song.id}
              onClick={() => plaWithID(song.id)}
              className="flex items-center gap-4 py-2 hover:bg-[#ffffff2b] cursor-pointer"
            >
              <p className="text-[#aaa]">{index + 1}</p>
              <img src={song.image} alt="" className="w-12 rounded" />
              <div>
                <p className="text-white font-semibold">{song.name}</p>
                <p className="text-sm text-gray-400">{song.author}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DisplayPlaylist;
