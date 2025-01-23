"use client";

import React, { useState } from "react";
import ProductReview from "./ProductReview";

const ProductDetails = ({ product }) => {
  const tab = [
    {
      id: 1,
      label: "Description",
    },
    {
      id: 2,
      label: "Specification",
    },
    {
      id: 3,
      label: "Rating & Review",
    },
  ];

  const [isActive, setActive] = useState(2);
  const toggletab = (num) => {
    setActive(num);
  };
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-start items-center gap-6 font-poppins-semibold text-text-secondary border-t-2 border-b-2 border-gray-200 px-6 lg:px-2 py-2">
        {tab.map((items) => (
          <p
            key={items.id}
            onClick={() => toggletab(items.id)}
            className={`${
              isActive === items.id
                ? "bg-primary-100 dark:text-gray-700  rounded-md px-2 py-1"
                : " "
            }px-2 text-text-default dark:text-gray-100 py-1`}
          >
            {items.label}
          </p>
        ))}
      </div>
      {isActive === 1 && (
        <div className="space-y-4 py-4 px-2">
          <p className="font-Poppins text-text-default dark:text-gray-200">
            {product.description}
          </p>
        </div>
      )}
      {isActive === 2 && (
        <section className="px-2 py-4 font-Poppins text-text-default">
          <table className="table-auto w-full border-collapse border border-gray-200 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">
                  Specification
                </th>
                <th className="border border-gray-300 px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Display</td>
                <td className="border border-gray-300 px-4 py-2">
                  6.1-inch or 6.7-inch Super Retina XDR Display
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Design</td>
                <td className="border border-gray-300 px-4 py-2">
                  Aluminum frame with color-infused glass back; Available in 5
                  colors
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Processor</td>
                <td className="border border-gray-300 px-4 py-2">
                  A18 Bionic chip
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Camera</td>
                <td className="border border-gray-300 px-4 py-2">
                  48 MP Fusion Camera (Vertical arrangement), spatial photo &
                  video support
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  Special Features
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Action Button, Camera Control Button, Apple Intelligence
                  integration
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  Wireless Connectivity
                </td>
                <td className="border border-gray-300 px-4 py-2">Wi-Fi 7</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">
                  Battery Life
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Improved, with energy-efficient performance
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  Storage Options
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Starts at 128GB
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Price</td>
                <td className="border border-gray-300 px-4 py-2">
                  Starting at $799
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  Availability
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Pre-orders began on September 13, 2024; Available from
                  September 20, 2024
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
      {isActive === 3 && (
        <div>
          <ProductReview />
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
