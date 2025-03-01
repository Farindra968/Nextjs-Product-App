"use client";
import { EDITPRODUCT_ROUTE, PRODUCT_ROUTE } from "@/constant/routes";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import broken_image from "@/assets/images/broken_image.svg";
import { MdEditSquare } from "react-icons/md";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEye,
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

const ProductCardList = ({ product }) => {
  const offerPrice = (product.price * 0.8).toFixed(2);
  const discountOffer = ((product.price - offerPrice) / product.price) * 100;

  return (
    <div className="w-full ">
      <div className="bg-white dark:bg-gray-700 border dark:border-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center  gap-4">
          {/* First column: Image */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center h-72 md:h-48  md:p-2">
            <Image
              src={product.imageUrls[0] || broken_image}
              alt={product.name}
              width={600}
              height={600}
              className=" object-cover md:w-full  h-full md:h-48 rounded-t-md md:rounded-md"
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {Math.round(discountOffer)}% OFF
            </span>
          </div>

          {/* Second column: Title, Category, Rating, Attributes */}
          <div className=" w-full px-4 md:px-0 ">
            <h2 className="text-xl font-poppins-bold text-primary-800 dark:text-gray-100 pb-3">{product.name}</h2>
            <div className="flex justify-between md:justify-start items-center gap-2 py-2">
            <p className="text-sm text-gray-500 dark:text-gray-100">
              Category: <span className="font-poppins-medium bg-primary-200 text-primary-900 px-1 rounded-md ">{product.category}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-100">
              Brand: <span className="font-poppins-medium bg-secondary-200 text-primary-900 px-1 rounded-md ">{product.brand}</span>
            </p>
            </div>

            <div className="py-2 flex items-center">
              <span className="text-sm font-Poppins text-gray-700 dark:text-gray-50 mr-2">
                Rating:
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < 5 ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600 font-Poppins dark:text-gray-50">(20 reviews)</span>
              </div>
            </div>
            <div>
              <p className="hidden md:block font-Poppins max-h-9 overflow-hidden text-ellipsis text-sm text-gray-500 dark:text-gray-300">
                <Link href={`${PRODUCT_ROUTE}/${product.id}`} className="hover:font-poppins-medium">
                {product.description}
                </Link>
                
                  
              </p>
            </div>
          </div>

          {/* Third column: Stock, Price, View Details, Add to Cart */}
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-end">
            <div>
              {product.stock >0 ? <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <FaCheckCircle className="mr-1" />
                In Stock: {product.stock}
              </span> :
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <FaCheckCircle className="mr-1" />
              Out of Stock:
            </span>
              }

              <div className="py-2 flex items-end gap-4">
                <p className="text-3xl font-poppins-semibold text-gray-900 dark:text-gray-100">
                  ${Math.round(offerPrice)}
                </p>
                <p className="font-poppins-semibold text-gray-700 dark:text-gray-300 line-through">
                  ${product.price}
                </p>
              </div>
            </div>

            <div className="flex md:block w-full gap-4 py-2 md:space-y-2">
            <Link href={`${PRODUCT_ROUTE}/${product.id}`}  className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-500 rounded-md text-sm font-medium text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <FaEye className="inline-block mr-2" />
                View Details
                </Link>
              <button className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <FaShoppingCart className="inline-block mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const offerPrice = (product.price * 0.8).toFixed(2);
  const discountOffer = ((product.price - offerPrice) / product.price) * 100;

  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="w-full mx-auto bg-white dark:bg-gray-700 rounded-md shadow-md px-3 py-2 overflow-hidden md:max-w-sm lg:max-w-md">
      <div className="relative ">
        {product.imageUrls && product.imageUrls.length > 0 && (
          <>
            <img
              className="w-full h-56 object-cover object-center  rounded-lg "
              src={product.imageUrls[0] || broken_image}
              alt="Product image"
            />
          </>
        )}
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-bold">
          {Math.round(discountOffer)}% OFF
        </div>
        <button
          className={`absolute bottom-0 right-2 p-2 rounded-full ${
            isWishlisted ? "text-red-500" : "text-gray-900"
          } hover:text-red-500 transition-colors duration-300`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <FaHeart
            className="h-6 w-6"
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>
      <div className="py-3">
        <div className="flex justify-between gap-2 items-center mb-2">
          <Link href={`${PRODUCT_ROUTE}?category=${product.category}`} className="text-xs font-semibold text-text-secondary dark:text-gray-200 uppercase tracking-wider">
            {product.category || "Uncategorized"}
          </Link>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`h-4 w-4 ${
                  i < 4 ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
              />
            ))}
            <span className="text-xs text-gray-500 dark:text-gray-300 ml-1">
              (42)
            </span>
          </div>
        </div>
        <h2 className="text-[16px] font-poppins-medium text-primary-800 dark:text-gray-100 h-12 mb-4">
          {product.name}
        </h2>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-primary-50">
              ${Math.round(offerPrice)}
            </span>
            <span className="text-sm text-gray-500 dark:text-secondary-100  line-through ml-2">
              ${product.price}
            </span>
          </div>
          {product.stock ? (
            <span className="text-xs font-semibold bg-green-300 px-2 rounded-md text-green-900">
              In Stock
            </span>
          ) : (
            <span className="text-xs font-semibold bg-red-300 px-2 rounded-md text-red-900">
              Out of Stock
            </span>
          )}
        </div>
        <Link
          href={`${PRODUCT_ROUTE}/${product.id}`}
          className="bg-green-600 flex justify-center px-3 py-2 rounded-md text-white font-semibold hover:bg-green-900"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export { ProductCardList, ProductCard };
