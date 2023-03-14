import React from "react";
import { SiNike } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
const AfterNavBar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="ml-12">
          <SiNike
            size={60}
            className="text-2xl mr-2 cursor-pointer hover:text-gray-500"
          />
        </div>
        <div className="py-4 ml-56 ">
          <ul className=" flex gap-8  font-bold">
            <li className="hover:border-b hover:border-1 transition duration-500 ease-in-out hover:border-black cursor-pointer">
              New & Featured
            </li>
            <li className="hover:border-b hover:border-1 transition duration-500 ease-in-out hover:border-black cursor-pointer">
              Men{" "}
            </li>
            <li className="hover:border-b hover:border-1 transition duration-500 ease-in-out hover:border-black cursor-pointer">
              Women{" "}
            </li>
            <li className="hover:border-b hover:border-1 transition duration-500 ease-in-out hover:border-black cursor-pointer">
              Kids{" "}
            </li>
            <li className="hover:border-b hover:border-1 transition duration-500 ease-in-out hover:border-black cursor-pointer">
              Accessories{" "}
            </li>
            <li className="hover:border-b hover:border-1 transition duration-500 ease-in-out hover:border-black cursor-pointer">
              Sale{" "}
            </li>
          </ul>
        </div>
        <div className="mr-12 flex py-2">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm  rounded-3xl text-black  w-[180px] h-[40px] bg-gray-200  "
                placeholder="Search.."
              />
            </div>
          </form>
          <AiOutlineHeart className="ml-4 h-[40px] w-[40px] rounded-full px-2 hover:bg-gray-200 cursor-pointer " />
          <BiShoppingBag className="ml-4 h-[40px] text-black w-[40px] rounded-full px-2 hover:bg-gray-200 cursor-pointer " />
        </div>
      </div>
      <div className="bg-gray-100 p-4 text-sm flex justify-between position-fixed w-full">
        jpk
      </div>
    </>
  );
};

export default AfterNavBar;
