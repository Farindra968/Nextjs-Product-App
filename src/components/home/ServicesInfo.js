
import React from "react";
import { AiFillProduct } from "react-icons/ai";
import { RiDiscountPercentFill, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const ServicesInfo = () => {
  const featuresInfo = [
    {
      icon: <RiDiscountPercentFill />,
      title: "Best price & offered",
      description: "Order 50$ or mor",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Free delivery",
      description: "24/7 amazing services",
    },
    {
      icon: <AiFillProduct />,
      title: "Quality Products",
      description: "Best quality products",
    },
    {
      icon: <RiSecurePaymentLine />,
      title: "Secure Payment",
      description: "100% secure payment",
      },
      {
        icon: <RiSecurePaymentLine />,
        title: "Secure Payment",
        description: "100% secure payment",
      },
  ];
  return (
    <div className="hidden md:flex justify-between">
      {featuresInfo.map((items) => (
        <div key={items.title} className="flex items-center space-x-2 bg-primary-200 dark:bg-gray-700 p-3 rounded-md">
          <div className="text-4xl text-primary-900 dark:text-primary-500">
            {items.icon}
          </div>
          <div>
            <p className=" text-text-default dark:text-primary-100 font-poppins-semibold">
              {items.title}
            </p>
            <p className="text-text-secondary dark:text-gray-300 font-Poppins text-sm">{items.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesInfo;