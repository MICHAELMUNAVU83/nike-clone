import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { RiFacebookFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <div className="bg-black py-8 mt-8 ">
      <div className="flex  justify-between ">
        <div className="flex gap-8">
          <ul className="flex flex-col text-white text-md font-bold mx-12 uppercase gap-1">
            <li className="my-2">Gift Cards</li>
            <li>Promotions</li>
            <li>Find a Store</li>
            <li>Sign Up for Email</li>
            <li>Become a Member</li>
            <li>Nike Journal</li>
            <li>Send Us Feedback</li>
          </ul>
          <ul className="flex flex-col mx-12 text-gray-400 text-md  gap-1">
            <li className="uppercase font-bold my-2">Get help</li>
            <li>Order status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Gift Card Balance</li>
            <li>Contact Us</li>
          </ul>
          <ul className="flex flex-col mx-12 text-gray-400 text-md  gap-1">
            <li className="uppercase font-bold my-2">About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Returns</li>
            <li>Investors</li>
            <li>Purpose</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="flex   gap-2">
          <AiOutlineTwitter className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
          <RiFacebookFill className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
          <TfiYoutube className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
          <ImInstagram className="bg-gray-200 rounded-full text-black h-8 w-8  p-2 text-2xl" />
        </div>
      </div>

      <div className="flex justify-between mx-12 text-white pt-8  text-md  gap-1">
        <div className="flex gap-2">
          <div className="flex">
            <IoLocationSharp className="text-2xl mr-2" />
            Nairobi, Kenya
          </div>
          <div className="flex mt-1 text-sm text-gray-400">
            @2023 Nike, Inc. All rights reserved
          </div>
        </div>
        <div className="flex-col ">
          <div className="flex gap-4 text-xs">
            <span className="text-gray-400">Guides</span>
            <span className="text-gray-400">Terms of Sales </span>
            <span className="text-gray-400">Terms of Use</span>
            <span className="text-gray-400">Nike Privacy Policy</span>
            <span className="text-gray-400">Your Privacy Choices </span>
          </div>
          <div className="flex justify-end pt-4 text-xs">
            <span className="text-gray-400">CA Supply Chains Act</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
