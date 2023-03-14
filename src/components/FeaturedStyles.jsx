import React from "react";
import style1 from "./images/style1.png";
import style2 from "./images/style2.png";
const FeaturedStyles = () => {
  return (
    <div className="mt-16">
      <p>
        <span className="pl-8 my-4 text-2xl">Featured Styles</span>
      </p>
      <div className=" mx-8 my-4  flex justify-center gap-2">
        <div className="relative">
          <img src={style2} alt="style2" />
          <div className="absolute flex flex-col bottom-16 left-12 bottom-0 left-0 h-24  text-white font-bold text-2xl">
            <div className="py-4">Gear to get you going</div>
            <p className="bg-white px-4 py-2 text-black rounded-3xl">
              Shop Women's Fitness
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={style1} alt="style1" />
          <div className="absolute flex flex-col bottom-16 left-12 bottom-0 left-0 h-24  text-white font-bold text-2xl">
            <div className="py-4">Gear to get you going</div>
            <p className="bg-white px-4 py-2 text-black rounded-3xl">
              Shop Women's Jordan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStyles;
