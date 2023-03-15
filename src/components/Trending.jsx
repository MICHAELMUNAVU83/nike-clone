import React from "react";
import trending from "./images/trending.png";
const Trending = () => {
  return (
    <div className="mt-16">
      <p className="pl-8 my-4 text-2xl">Trending</p>
      <div className="flex  flex-col items-center">
        <img className="px-8" src={trending} alt="trending" />
        <div className="text-gray-600 flex text-md text-center flex-col  mt-4">
          <h1 className="text-5xl font-bold text-black">NIKE STYLE </h1>
          <p className="my-4 md:px-0 px-12">
            Shop Stylist Miyako Bellizi's look for a fit that works all day ,
            everyday
          </p>
        </div>
        <div className="gap-4 my-4 flex  items-center">
          <div className="bg-black text-white px-4 py-2 rounded-3xl">
            Shop 
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Trending;
