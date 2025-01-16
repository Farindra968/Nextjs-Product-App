"use client"
import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MegaMart from "@/assets/images/MegaMart.svg";
import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";
import { MdLightMode } from "react-icons/md";

function MainHeader() {
  return (
    <section className=" h-auto w-full z-50  border-b-2 border-primary-50 dark:border-gray-700">
      <div className="flex justify-between items-center max-w-[1200px] m-auto p-3">
        {/* Icon and Logo */}
        <div className="flex items-center justify-center gap-4 w-auto h-auto">
          <div className=" md:hidden flex justify-center items-center text-3xl text-primary-700 w-10 h-10 rounded-md  bg-primary-50 ">
            <HiOutlineMenuAlt2 />
          </div>
          <Image src={MegaMart} alt={MegaMart} className="hidden w-24 sm:inline-block" />
        </div>
        {/* Search Box*/}
        <div className="w-full sm:w-1/2 flex mx-2 md:mx-0 ">
          <div className="bg-primary-50  w-full h-11 rounded-md md:px-4 relative">
            
          <TfiMenuAlt className="lg:text-xl hidden sm:inline-block text-primary-700 absolute right-5 top-3" />
            <BsSearch className="lg:text-xl  text-primary-700 absolute left-2 md:left-5 top-3" />
            <input type='search' placeholder='Search essentials, groceries and more...' className="w-full font-Poppins border-0 h-11 bg-transparent text-text-secondary pl-8 focus:outline-none md:px-10 text-sm"/>
            </div>
          </div>
          {/*and other */}

          <div className=" w-auto flex justify-end  items-center">
            <div className="flex items-center gap-2  lg:border-r-2 px-4 border-gray-300 dark:border-gray-500">
              <span className="text-3xl text-primary-700 dark:text-primary-400 relative">
              <AiOutlineShoppingCart />
              <p className=" absolute top-0 right-0 text-xs bg-secondary-500 text-white w-4 h-4 flex justify-center items-center rounded-full">5</p>
              </span>
              <span className="font-Poppins  text-text-muted dark:text-primary-50 hidden md:block">Cart</span>
          </div>
          <p className="w-auto flex items-center gap-2 lg:border-r-2 px-4 border-gray-300 dark:border-gray-500 ">
              <span className="text-3xl text-primary-700 dark:text-primary-400">
                <FiUser />
              </span>
              <span className="font-Poppins  text-text-muted dark:text-primary-50 hidden md:block">
                Sign Up/Sign In
              </span>
          </p>
          <p className="w-8 h-8 flex justify-center items-center text-xl text-white rounded-full mx-4 bg-gray-700 dark:bg-gray-300">
          <MdLightMode />
          </p>
          </div>
      </div>
    </section>
  );
}

export default MainHeader;