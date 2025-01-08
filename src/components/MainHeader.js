"use client"
import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MegaMart from "@/assets/images/MegaMart.svg";
import { FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";

function MainHeader() {
  return (
    <section className=" h-auto w-full  border-b-2 border-primary-50">
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
          <div className="bg-primary-50  w-full h-10 rounded-md md:px-4 relative">
            
          <TfiMenuAlt className="lg:text-xl hidden sm:inline-block text-primary-700 absolute right-5 top-2.5" />
            <BsSearch className="lg:text-xl  text-primary-700 absolute left-2 md:left-5 top-2.5" />
            <input type='search' placeholder='Search essentials, groceries and more...' className="w-full border-0 h-10 bg-transparent text-text-secondary pl-8 focus:outline-none md:px-10 text-sm"/>
            </div>
          </div>
          {/*and other */}

          <div className=" w-auto flex justify-end  items-center">
            <p className="w-auto flex items-center gap-2 lg:border-r-2 px-2 border-gray-300">
              <span className="text-3xl text-primary-700">
                <FiUser />
              </span>
              <span className="  text-text-muted hidden md:block lg:font-semibold">
                Sign Up/Sign In
              </span>
            </p>
            <div className="flex items-center gap-2 px-3">
              <span className="text-3xl text-primary-700 relative">
              <AiOutlineShoppingCart />
              <p className=" absolute top-0 right-0 text-xs bg-secondary-500 text-white w-4 h-4 flex justify-center items-center rounded-full">5</p>
              </span>
              <span className="  text-text-muted hidden md:block lg:font-semibold">Cart</span>
            </div>
          </div>
      </div>
    </section>
  );
}

export default MainHeader;