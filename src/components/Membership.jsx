import React from "react";
import membership from "./images/membership.png";

const Membership = () => {
  return (
    <div className="mt-16 ">
      <p>
        <span className="pl-8 my-4  text-2xl">Nike Membership</span>
      </p>

      <div className="relative md:mx-8 mx-4 bg-black py-12 my-4 md:my-4 ">
        <img src={membership} alt="membership" />
        <div className="absolute flex flex-col top-0 md:top-4 md:left-12  left-2  text-white text-sm   md:text-2xl">
          <div className="text-md  md:text-5xl font-bold">BECOME A </div>
          <div className=" text-md  md:text-5xl font-bold">NIKE MEMBER</div>

          <p className="my-2 text-sm w-[70%] md:text-md">Sign Up free to join the community</p>
          <div className="flex md:gap-4 gap-2 md:mt-4 my-8">
            <p className="bg-white text-center text-md w-[100px] px-2 py-2 text-black rounded-3xl">
              Join Us
            </p>
            <p className="bg-white text-center w-[100px] px-2 py-2 text-black rounded-3xl">
              Sign In
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
