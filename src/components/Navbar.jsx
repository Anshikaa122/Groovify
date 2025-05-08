import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 for authentication

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Get the user and logout function from Auth0
  const { user, logout } = useAuth0();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-12">
          <p className="bg-white text-black text-[15px] px-5 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-green-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            A
          </p>

          {/* Log Out Button: Only visible if the user is logged in */}
          {user && (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 text-white text-sm px-4 py-1 rounded-2xl cursor-pointer"
            >
              Log Out
            </button>
          )}
        </div>
      </div>

      {/* ✅ Fixed Search Bar */}
      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search songs..."
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-white text-black px-4 py-1 rounded-2xl w-full max-w-sm"
        />
      </div>
    </>
  );
};

export default Navbar;
