'use client'
import { EDITPRODUCT_ROUTE, PRODUCT_ROUTE } from "@/constant/routes";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import broken_image from "@/assets/images/broken_image.svg";
import { MdEditSquare } from "react-icons/md";
import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";



const ProductCard = ({ product }) => {
  const offerPrice = (product.price * 0.8).toFixed(2);
const discountOffer = ((product.price - offerPrice) / product.price) * 100;

  return (
    <section>
      <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden  transition-all duration-300 shadow-md dark:shadow-gray-600">
        <div className="relative">
          <div className="relative h-56 sm:h-56 w-full">
            <Image
              src={product.imageUrls[0] || broken_image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
            <Link href={`${PRODUCT_ROUTE}/edit/${product.id}`}>
              <MdEditSquare className="h-5 w-5 text-gray-500  cursor-pointer transition-colors duration-300" />
            </Link>
          </div>
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            Save {Math.round(discountOffer)}%
          </div>
          <div className=" flex justify-between absolute bottom-0  text-xs font-bold px-2 py-1 rounded-md">
            <p className="text-xs sm:text-sm inline-block font-semibold px-2 mr-2 bg-primary-200 rounded-md text-primary-900 mb-2">
              {product.brand || "No Brand"}
            </p>
            <p className="text-xs sm:text-sm inline-block font-semibold px-2 bg-secondary-200 rounded-md text-secondary-900 mb-2">
              {product.category || "No Category"}
            </p>
          </div>
        </div>
        <div className="px-4 py-4 ">
          <h2 className="dark:text-primary-200 h-10 text-sm sm:text-[18px] font-semibold text-primary-800 ">
            {product.name}
          </h2>
          <div className="flex flex-col sm:flex-row items-start my-1 sm:my-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4.5 ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 dark:text-gray-100 text-sm ml-2">
              20 Review
            </span>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex flex-col pb-2">
              <span className="text-sm text-text-muted dark:text-secondary-500 line-through ml-2">
                रु {product.price}
              </span>
              <span className="text-2xl font-bold text-primary-800 dark:text-primary-100">
                रु {Math.round(offerPrice)}
              </span>
            </div>
            <span className="hidden sm:inline-block bg-primary-100  text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
              Save {Math.round(discountOffer)}%
            </span>
          </div>
          <Link href={`${PRODUCT_ROUTE}/${product.id}`}>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
              <FiShoppingCart className=" mr-2 h-5 w-5" />
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductCard1 = ({ product }) => {
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
      <div className="py-3 px-2">
        <div className="flex justify-between gap-2 items-center mb-2">
          <span className="text-xs font-semibold text-text-secondary dark:text-gray-200 uppercase tracking-wider">
            {product.category || "Uncategorized"}
          </span>
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
            <span className="text-xs text-gray-500 dark:text-gray-300 ml-1">(42)</span>
          </div>
        </div>
        <h2 className="text-[18px] font-semibold text-primary-800 dark:text-gray-100 h-10 mb-4">
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

export { ProductCard, ProductCard1 };
