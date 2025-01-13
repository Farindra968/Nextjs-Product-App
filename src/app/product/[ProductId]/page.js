import { getProductId } from "@/services/api/productApi";
import Image from "next/image";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import {  IoMdStar } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import ProductDetails from "@/components/product/ProductDetails";


const page = async ({ params }) => {
  const id = (await params).ProductId;

  const product = await getProductId(id);
  console.log(product);

  const offerPrice = (product.price * 0.8).toFixed(2);
  const discountOffer = ((product.price - offerPrice) / product.price) * 100;


  return (
    <section className="max-w-screen-xl m-auto h-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center py-6">
        {/* 1st cols [Product Image] */}
        <div className="w-[80%] h-auto p-6 relative">
          <Image
            src={product.url}
            alt={product.name}
            width={400}
            height={400}
          />
          <p className="flex justify-center items-center w-10 h-10 bg-secondary-800 font-poppins-semibold rounded-full text-sm text-white absolute top-2 right-5">
          {Math.round(discountOffer)}%
          </p>
        </div>
        {/* 2nd cols [Product Details] */}
        <div className="w-full h-auto p-6">
          {/* Reviews */}
          <div className="flex items-center gap-2 py-3">
            <div className="flex items-center text-xl text-yellow-500">
              {[...Array(5)].map((rate) => (
                <IoMdStar key={rate} />
              ))}
              <IoMdStar />
            </div>
            <span className=" text-gray-600 text-sm rounded-md font-Poppins ">
              1.3k Review
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl text-primary-800 font-poppins-bold">
            {product.name}
          </h1>

          {/* Categories, Brand, SKU  */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 border-b-2 border-gray-200 ">
            <p className=" font-Poppins  text-text-secondary">
              Categories:{" "}
              <span className="text-text-default font-poppins-medium ">
                {product.category}
              </span>
            </p>
            <p className=" font-Poppins  text-text-secondary">
              Brand:{" "}
              <span className="text-text-default  font-poppins-medium ">
                {product.brand}
              </span>
            </p>
            <p className=" font-Poppins  text-text-secondary">
              SKU:{" "}
              <span className="text-text-default  font-poppins-medium ">
                MGFTX202
              </span>
            </p>
            <p className=" font-Poppins  text-text-default">
              Availability:{" "}
              <span className="text-green-600 font-poppins-bold ">
                In Stock
              </span>
            </p>
          </div>
          {/* Short Description */}
          <div className="py-4">
            <p className="font-Poppins text-text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation 1 ullamco laboris

            </p>
          </div>
          <button className=" bg-secondary-700 hover:bg-secondary-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
          <IoLogoWhatsapp className="mr-2 h-5 w-5" />
              Order from WhatsApps
            </button>
          <div className="flex items-center gap-4 py-10">
            <p className="text-3xl font-poppins-bold text-primary-700">
              ${offerPrice}
            </p>
            <p className="text-xl line-through font-poppins-semibold text-secondary-600">
              ${product.price}
            </p>
          </div>
          {/* Cart Buttom */}
          <div className="flex justify-start items-center gap-4">
            <button className=" bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
              <FiShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button className=" border-2 border-text-muted rounded-lg flex justify-center items-center p-3 hover:bg-text-muted"><FaRegHeart /></button>
          </div>
        </div>
      </div>
      <section className="py-10">
        <div >
          <ProductDetails/>
        </div>
      </section>
    </section>
  );
};

export default page;
