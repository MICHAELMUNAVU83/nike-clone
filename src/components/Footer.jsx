import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { RiFacebookFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <div className="bg-black py-8 mt-8 ">
      <div className="flex md:flex-row flex-col  justify-between ">
        <div className="flex md:gap-8 gap-2">
          <ul className="flex flex-col text-white text-sm md:text-md font-bold md:mx-12 uppercase gap-1">
            <li className="my-2">Gift Cards</li>
            <li>Promotions</li>
            <li>Find a Store</li>
            <li>Sign Up for Email</li>
            <li>Become a Member</li>
            <li>Nike Journal</li>
            <li>Send Us Feedback</li>
          </ul>
          <ul className="flex flex-col md:mx-12 text-gray-400 text-sm md:text-md  gap-1">
            <li className="uppercase font-bold my-2">Get help</li>
            <li>Order status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Gift Card Balance</li>
            <li>Contact Us</li>
          </ul>
          <ul className="flex flex-col md:mx-12 text-gray-400 text-sm md:text-md  gap-1">
            <li className="uppercase font-bold my-2">About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Returns</li>
            <li>Investors</li>
            <li>Purpose</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="flex my-4 md:my-0   gap-2">
          <AiOutlineTwitter className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
          <RiFacebookFill className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
          <TfiYoutube className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
          <ImInstagram className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between md:mx-12 text-white pt-8  text-md  gap-1">
        <div className="flex gap-2">
          <div className="flex md:text-2xl text-sm ">
            <IoLocationSharp className="md:text-2xl text-sm  mr-2" />
            Nairobi, Kenya
          </div>
          <div className="flex mt-1 text-sm text-gray-400">
            @2023 Nike, Inc. All rights reserved
          </div>
        </div>
        <div className="flex-col ">
          <div className="flex md:gap-4  gap-1 text-xs">
            <span className="text-gray-400">Guides</span>
            <span className="text-gray-400">Terms of Sales </span>
            <span className="text-gray-400">Terms of Use</span>
            <span className="text-gray-400">Nike Privacy Policy</span>
            <span className="text-gray-400">Your Privacy Choices </span>
          </div>
          <div className="flex pr-12 justify-end pt-4 text-xs">
            <span className="text-gray-400">CA Supply Chains Act</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
