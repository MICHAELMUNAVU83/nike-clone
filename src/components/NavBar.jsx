import React from "react";
import { GrStar } from "react-icons/gr";
import { SiJordan } from "react-icons/si";
const NavBar = () => {
  return (
    <nav className="bg-gray-100 p-2 text-sm flex justify-between position-fixed w-full">
      <div className="md:ml-12 ml-4 flex">
        <SiJordan className="text-2xl mr-2 cursor-pointer hover:text-gray-500" />
        <GrStar className="text-2xl mr-2 cursor-pointer hover:text-gray-500" />
      </div>
      <div className="md:mr-12 mr-4">Find a store | Help | Join Us | Sign In</div>
    </nav>
  );
};

export default NavBar;
