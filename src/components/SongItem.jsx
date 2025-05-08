import { useContext, useState, useEffect } from "react";
import { PlayContext } from "../context/PlayContext";
import PropTypes from "prop-types";


const SongItem = ({ name, image, desc, id }) => {
  const { plaWithID } = useContext(PlayContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userPlaylists")) || [];
    setPlaylists(saved);
  }, []);

  const addToPlaylist = (playlistId) => {
    const saved = JSON.parse(localStorage.getItem("userPlaylists")) || [];
    const updated = saved.map((pl) =>
      pl.id === playlistId && !pl.songs.includes(id)
        ? { ...pl, songs: [...pl.songs, id] }
        : pl
    );
    localStorage.setItem("userPlaylists", JSON.stringify(updated));
    setPlaylists(updated);
    setShowDropdown(false);
    alert("Song added to playlist!");
  };

  return (
    <div className="min-w-[180px] p-2 px-3 rounded hover:bg-[#ffffff26] relative">
      <img
        onClick={() => plaWithID(id)}
        className="rounded cursor-pointer"
        src={image}
        alt=""
      />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>

      <button
  onClick={() => setShowDropdown(!showDropdown)}
  className="text-xs mt-2 bg-green-500 text-black px-1.5 py-0.5 rounded"
>
  +
</button>

      {showDropdown && (
        <div className="absolute top-28 bg-[#333] text-white p-2 rounded shadow z-50">
          {playlists.length === 0 ? (
            <p>No playlists</p>
          ) : (
            playlists.map((pl) => (
              <div
                key={pl.id}
                onClick={() => addToPlaylist(pl.id)}
                className="cursor-pointer hover:text-green-400"
              >
                {pl.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

SongItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string,
  id: PropTypes.number.isRequired,
};
export default SongItem;
