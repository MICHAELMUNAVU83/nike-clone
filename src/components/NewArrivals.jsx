import React from "react";
import woman from "./images/woman.png";
import man from "./images/man.png";
import child from "./images/child.png";
const NewArrivals = () => {
  return (
    <div className="mt-16">
      <p>
        <span className="pl-8 my-4 text-2xl">New Arrivals</span>
      </p>
      <div className=" mx-8 my-4 md:flex-row flex-col mx-auto  flex justify-center gap-2">
        <div>
          <img src={woman} alt="woman" />
          <p className="my-4 px-4 mx-auto font-semibold text-2xl">New for Women</p>
        </div>

        <div>
          <img src={child} alt="child" />
          <p className="my-4 px-4 mx-auto font-semibold text-2xl">New for Kids</p>
        </div>
        <div>
          <img src={man} alt="man" />
          <p className="my-4 px-4 mx-auto font-semibold text-2xl">New for Men</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
