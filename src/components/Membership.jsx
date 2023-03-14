import React from "react";
import membership from "./images/membership.png";

const Membership = () => {
  return (
    <div className="mt-16">
      <p>
        <span className="pl-8 my-4 text-2xl">Nike Membership</span>
      </p>

      <div className="relative mx-8 my-4">
        <img src={membership} alt="membership" />
        <div className="absolute flex flex-col top-4 left-12  left-0 h-24  text-white  text-2xl">
          <div className=" text-5xl font-bold">BECOME A </div>
          <div className=" text-5xl font-bold">NIKE MEMBER</div>

          <p className="my-2">Sign Up free to join the community</p>
          <div className="flex gap-4 mt-4">
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
