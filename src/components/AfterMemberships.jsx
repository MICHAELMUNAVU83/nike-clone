import React from "react";
import after1 from "./images/after1.png";
import after2 from "./images/after2.png";
import after3 from "./images/after3.png";
const AfterMemberships = () => {
  return (
    <div className="mt-16">
      <div className=" mx-8 my-4  flex-col md:flex-row flex justify-center gap-4 md:gap-2">
       

        <div className="relative">
          <img src={after1} alt="after1" />
          <div className="absolute flex flex-col md:bottom-16 bottom-8 left-12  left-0 h-24  text-black ">
            <div className="py-2 text-md">Member Shop </div>
            <div className="py-2 text-2xl">Shop Exclusive member</div>
            <div className="py-2 text-2xl">styles</div>
          </div>
        </div>

        <div className="relative">
          <img src={after2} alt="after2" />
          <div className="absolute flex flex-col md:bottom-16 bottom-8 left-12  left-0 h-24  text-black ">
            <div className="py-2 text-md">Shipping it as it should be </div>
            <div className="py-2 text-2xl">Free Standard Shipping on all</div>
            <div className="py-2 text-2xl">orders</div>
          </div>
        </div>
        <div className="relative">
          <img src={after3} alt="after3" />
          <div className="absolute flex flex-col md:bottom-16 bottom-8 left-12  left-0 h-24  text-black  ">
            
            <div className="pt-4 text-sm">Nike By You</div>
            <div className="py-2 text-2xl">Customize your so-you shoe.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterMemberships;
