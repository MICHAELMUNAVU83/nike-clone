import React from "react";
import letsgo1 from "./images/letsgo1.png";
import letsgo2 from "./images/letsgo2.png";
const LetsGo = () => {
  return (
    <div className="mt-16">
      <p>
        <span className="pl-8 my-4 text-2xl">Featured Styles</span>
      </p>
      <div className=" mx-8 my-4  flex justify-center gap-2">
        <div className="relative">
          <img src={letsgo1} alt="letsgo1" />
          <div className="absolute flex flex-col bottom-32 left-12 b left-0 h-24  text-white font-bold text-2xl">
            <div className="py-2">Nike Trail</div>
            <div className="py-2">Styles for Trail running:</div>
            <div className="py-2">Featuring the wildhorse 8</div>
            <p className="bg-white text-center w-[250px] px-4 py-2 text-black rounded-3xl">
              Shop Nike Trail
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={letsgo2} alt="letsgo2" />
          <div className="absolute flex flex-col bottom-16 left-12  left-0 h-24  text-white font-bold text-2xl">
            <div className="py-4">Tourney Fan Gear </div>
            <p className="bg-white text-center w-[100px] px-2 py-2 text-black rounded-3xl">
              Shop 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsGo;
