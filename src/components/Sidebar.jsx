import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // ✅ Import useAuth0
import { assets } from "../assets/assets";

function Sidebar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth0(); // ✅ Get logout method

  const [playlists, setPlaylists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userPlaylists"));
    if (saved) setPlaylists(saved);
  }, []);

  const handleCreatePlaylist = () => {
    const name = prompt("Enter playlist name:");
    if (name) {
      const newPlaylist = {
        id: Date.now(),
        name,
        songs: [],
      };
      const updatedPlaylists = [...playlists, newPlaylist];
      setPlaylists(updatedPlaylists);
      localStorage.setItem("userPlaylists", JSON.stringify(updatedPlaylists));
    }
  };

  return (
    <div className="w-[100%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <img className="w-full h-12 object-cover rounded mt-4" src= "src\assets\img212.png" alt="Description of Image" />
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        
        {/* Display user info here */}
        {user && (
          <div className="pl-8 mt-4">
            <p className="font-semibold">Welcome, {user.name}</p>
          </div>
        )}
      </div>

      <div className="bg-[#121212] h-[75%] rounded overflow-y-auto">
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">It’s easy, we’ll help you</p>
          <button
            onClick={handleCreatePlaylist}
            className="px-4 text-black py-1.5 bg-white text-[15px] rounded-full mt-4"
          >
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let’s find some podcasts to follow</h1>
          <p className="font-light">We’ll keep you updated on new episodes</p>
          <button className="px-4 text-black py-1.5 bg-white text-[15px] rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>

        <div className="px-4 pb-2 mt-4">
          <input
            type="text"
            placeholder="Search playlists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-1 rounded bg-[#1f1f1f] text-white text-sm outline-none"
          />
        </div>

        {playlists.length > 0 && (
          <div className="p-4 mt-2 text-sm font-medium text-white">
            <h2 className="mb-2 text-gray-400">Your Playlists</h2>
            {playlists
              .filter((pl) =>
                pl.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((pl) => (
                <div
                  key={pl.id}
                  onClick={() => navigate(`/playlist/${pl.id}`)}
                  className="cursor-pointer hover:text-green-400 mb-1"
                >
                  {pl.name}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* ✅ Log Out Button (only show when user is logged in) */}
      {user && (
        <div className="mt-auto p-4">
          <button
            onClick={() =>
              logout({ returnTo: window.location.origin })
            }
            className="bg-red-600 w-full px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
