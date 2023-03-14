import React from "react";
import homepic from "./images/home.png";
const Home = () => {
  return (
    <div className="flex  flex-col items-center">
      <img className="px-8" src={homepic} alt="home" />
      <div className="text-gray-600 flex text-md text-center flex-col  mt-4">
        <h1 className="text-5xl font-bold text-black">ELEVATED AIR</h1>
        <p>Turn up on your self-expression with the Air Max 90 Futura and </p>
        <p>other essential styles that lift your fit</p>
      </div>
      <div className="gap-4 my-4 flex  items-center">
        <div className="bg-black text-white px-4 py-2 rounded-3xl">Shop Men's Air</div>
        <div className="bg-black text-white px-4 py-2 rounded-3xl">Shop Women's Air</div>
        <div className="bg-black text-white px-4 py-2 rounded-3xl">Shop Kid's Air</div>
      </div>
    </div>
  );
};

export default Home;
