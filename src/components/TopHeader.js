"use client"
import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

function TopHeader() {
  const topHeader = [
    {
      icon: <IoLocationOutline />,
      label: "Deliver to Kathmandu",
    },
    {
      icon: <TbTruckDelivery />,
      label: "Track your order",
    },
      {
          icon: <BiSolidOffer />,
          label: 'All offers'
    }
  ];
  return (
    <section className="bg-primary-50 hidden lg:inline-block h-auto w-full">
      <div className="flex justify-between items-center max-w-[1200px] m-auto p-2">
        <div>
          <p className="font-poppins text-text-muted">Welcome to Magmart</p>
        </div>
        <div className="flex">
          {topHeader.map((items) => (
            <p
              key={items.label}
              className="flex items-center gap-1 border-r-2 cursor-pointer px-3 border-gray-300"
            >
              <span className="text-primary-700">
                {items.icon}
              </span>
              <span className="font-poppins text-text-muted text-sm">
                {items.label}
              </span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopHeader;