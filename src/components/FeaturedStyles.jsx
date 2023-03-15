import React from "react";
import style1 from "./images/style1.png";
import style2 from "./images/style2.png";
const FeaturedStyles = () => {
  return (
    <div className="mt-16">
      <p>
        <span className="pl-8 my-4 text-2xl">Featured Styles</span>
      </p>
      <div className=" mx-8 my-4  flex md:flex-row flex-col justify-center gap-2">
        <div className="relative">
          <img src={style2} alt="style2" />
          <div className="absolute flex flex-col bottom-12 md:bottom-16 md:left-12 left-8 left-0 h-24  text-white font-bold text-2xl">
            <div className="py-4">Gear to get you going</div>
            <p className="bg-white px-4 md:w-[270px] md:text-xl text-xs w-[170px] py-2 text-black rounded-3xl">
              Shop Women's Fitness 
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={style1} alt="style1" />
          <div className="absolute flex flex-col bottom-12 md:bottom-16 md:left-12 left-4 left-0 h-24  text-white font-bold text-2xl">
            <div className="py-4">Gear to get you going</div>
            <p className="bg-white px-4 md:w-[290px] md:text-xl text-xs w-[190px] py-2 text-black rounded-3xl">
              Shop Women's Jordans
            </p>
          </div>
             
        </div>
      </div>
    </div>
  );
};

export default FeaturedStyles;
