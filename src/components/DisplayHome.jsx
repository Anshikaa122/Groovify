// import React from "react";
import Navbar from "./Navbar";
import { albumsData, singlealbumsData, songsData } from "../assets/assets";
import CardItem from "./CardItem";
import SongItem from "./SongItem";

function DisplayHome() {
  return (
    <>
      <Navbar />

      {/* Featured Charts */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (
            <CardItem
              key={index}
              name={items.name}
              desc={items.desc}
              id={items.id}
              image={items.image}
            />
          ))}
        </div>
      </div>

      {/* Today's Biggest Hits */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays Biggest Hits</h1>
        <div className="flex overflow-auto">
        {songsData
      .filter((item) => item.id >= 0 && item.id <= 7)
      .map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* 🔥 Trending Songs */}
      <div className="mb-4">
  <h1 className="my-5 font-bold text-2xl"> 🔥Trending Songs</h1>
  <div className="flex overflow-auto">
  {songsData
    .filter((item) => item.id >= 8 && item.id <= 28)
    .map((item, index) => (
      <SongItem
        key={`trending-${item.id}-${index}`} // Correct string interpolation here
        name={item.name}
        desc={item.desc}
        id={item.id}
        image={item.image}
      />
    ))}
</div>
</div>
      {/* 🌟 Popular Albums */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl"> 🌟Popular Albums</h1>
        <div className="flex overflow-auto gap-6 pr-4">
        {singlealbumsData.map((items, index) => (
  <CardItem
  key={`popular-${index}`} // Correctly using backticks for string interpolation
  name={items.name}
  desc={items.desc}
  id={items.id}
  image={items.image}
  variant="album"
/>
))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;