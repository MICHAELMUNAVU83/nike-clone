import React from "react";
import { SiNike } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const AfterNavBar = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:ml-12 mx-auto">
          <SiNike
            size={60}
            className="text-2xl mr-2 cursor-pointer hover:text-gray-500"
          />
        </div>
        <div className="py-4 mx-auto md:ml-56 ">
          <ul className=" flex md:gap-8 gap-2 text-xs md:font-bold">
            <li className="hover:border-b gap-1 hover:border-1 flex w-[100%] leading transition duration-500 ease-in-out hover:border-black cursor-pointer">
              <span>New </span>
              <span>&</span>
              Featured
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
        <div className="md:mr-12 mx-auto flex py-2">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div class="relative ml-4">
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
          <AiOutlineHeart className="ml-4 md:h-[40px] md:w-[40px] w-[30px] h-[30px] rounded-full md:px-2 px-1 hover:bg-gray-200 cursor-pointer " />
          <BiShoppingBag className="ml-4 md:h-[40px] md:w-[40px] w-[30px] h-[30px] text-black  rounded-full md:px-2 px-1 hover:bg-gray-200 cursor-pointer " />
        </div>
      </div>
      {window && window.innerWidth > 768 && (
        <div className="bg-gray-100 p-4  text-center text-sm flex justify-center w-[100%]">
          <Splide
            options={{
              perPage: 1,
              arrows: false,
              autoplay: true,
              speed: 2000,
              pagination: false,
              type: "loop",
              interval: 3000,
              rewindByDrag: true,
            }}
          >
            <SplideSlide>
              <div className="flex  flex-col justify-center">
                <p className="font-semibold text-sm">
                  New Markdowns: Up to 40% Off
                </p>
                <p className="underline text-sm md:text-xs">
                  Shop just-reduced styles—no code needed.{" "}
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex  flex-col justify-center">
                <p className="font-semibold  text-sm">
                  Free Shipping + Returns, Free Membership, Exclusive Products
                </p>
                <p className="underline">Join Now </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex  flex-col justify-center">
                <p className="font-semibold text-sm">Support Students Run LA</p>
                <p className="underline  text-sm md:text-xs">
                  Learn more on how to give back to Students Run LA.{" "}
                </p>
              </div>
            </SplideSlide>

            <SplideSlide>
              <div className="flex  flex-col justify-center">
                <p className="font-semibold v">Why Wait? Try Store Pickup</p>
                <p className="text-sm md:text-xs">
                  Buy online and find a store near you for pick up in less than
                  2 hours. <span className="underline">Shop now.</span>
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      )}
    </>
  );
};

export default AfterNavBar;
