"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md";
import categoriesData from "../data/Categories";
import { BiSolidOffer } from "react-icons/bi";
import { FcFlashAuto } from "react-icons/fc";
import { PRODUCT_ROUTE } from "@/constant/routes";


const HeaderCategories = () => {
  const [activeTab, setActiveTab] = useState(false); // Initialize with a boolean

  const handleTab = () => {
    setActiveTab((prev) => !prev); // Toggle the boolean state
  };



  const otherData = [
    {
      icon: <FcFlashAuto />,
      label: 'Flash Sales',
    },
    {
      icon: <BiSolidOffer />,
      label: 'New Year Offer',
    },
    {
      icon: <MdLocalOffer />,
      label: 'Today Deal',
    },
  ]

  return (
    <section className="h-auto w-full hidden lg:block border-b-2 border-primary-50">
      <div className="max-w-[1200px] m-auto p-2">
        <div className="flex justify-between items-center">
          <div
            onClick={handleTab} // Use the handleTab function
            className={`${
              activeTab ? "bg-primary-600 text-white" : "bg-primary-100 text-primary-900"
            } cursor-pointer   font-medium inline-flex justify-stretch items-center gap-4 px-10 p-2 rounded-md relative`}
          >
            All Categories
            <IoIosArrowDown
              className={`${
                activeTab ? "rotate-180 duration-1000" : "duration-1000"
              }`}
            />
          </div>
          <div
            className={`${
              activeTab
                ? "hidden"
                : "absolute px-2 py-4 top-[168px] rounded-md shadow-lg space-y-3 z-10 bg-white"
            }`}
          >
            {categoriesData.map((items) => (
              <p
                key={items.path}
                className="flex py-1 justify-between border-b-2 border-primary-50 items-center gap-4 text-text-default hover:bg-primary-100 rounded-md px-4"
              >
                {items.label}
                <IoIosArrowForward />
              </p>
            ))}
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex items-center">
              {
                otherData.map((items, index) => (
                  <p key={index} className="flex items-center justify-center gap-2 text-primary cursor-pointer border-r-2 border-primaryText px-3">
                  <span className="text-text-muted font-medium">{items.label}</span>
                  <span className="text-primary-700">{items.icon}</span>
                </p>
                ))
              }

            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderCategories;
