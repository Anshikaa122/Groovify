// import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayCard from "./DisplayCard";
import DisplayPlaylist from "./DisplayPlaylist";
import SearchResults from "./SearchResults"; // ✅ New Import
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";

function Display() {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayCard />} />
        <Route path="/playlist/:id" element={<DisplayPlaylist />} />
        <Route path="/search" element={<SearchResults />} /> {/* ✅ New Route */}
      </Routes>
    </div>
  );
}

export default Display;
