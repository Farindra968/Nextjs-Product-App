import { getProductId } from "@/services/api/productApi";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import ProductDetails from "@/components/product/ProductDetails";
import broken_image from "@/assets/images/broken_image.svg";

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
            src={product.url || broken_image}
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
          <h1 className="text-xl capitalize sm:text-2xl text-primary-800 font-poppins-bold">
            {product.name}
          </h1>

          {/* Categories, Brand, SKU  */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 border-b-2 border-gray-200 ">
            <p className=" font-Poppins  text-text-secondary">
              Categories:{" "}
              <span className="text-text-default font-poppins-medium ">
                {product.category || "No Category"}
              </span>
            </p>
            <p className=" font-Poppins  text-text-secondary">
              Brand:{" "}
              <span className="text-text-default  font-poppins-medium ">
                {product.brand || "No Brand"}
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
                In Stock {product.stock}
              </span>
            </p>
          </div>
          {/* Short Description */}
          <div className="py-4">
            <div>
              <p className="text-text-secondary font-poppins-medium">
                Key Specification:
              </p>
              {[...Array(5)].map((item) => (
                <p key={item} className="flex items-center gap-2 py-1 px-2">
                  <IoIosCheckmarkCircle className="text-text-default" />
                  <span className="text-sm font-Poppins text-text-default">
                    14th Generation Intel Core i7 14900HX Processor
                  </span>
                </p>
              ))}
            </div>
          </div>
          <button className=" bg-secondary-700 hover:bg-secondary-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
            <IoLogoWhatsapp className="mr-2 h-5 w-5" />
            Order from WhatsApps
          </button>
          <div className="flex items-center gap-4 py-10">
            <p className="text-3xl font-poppins-bold text-primary-700">
              <span className="text-secondary-500 font-sans font-semibold">
                रु
              </span>{" "}
              {offerPrice}
            </p>
            <p className="text-xl line-through font-poppins-semibold text-secondary-600">
              रु {product.price}
            </p>
          </div>
          {/* Cart Buttom */}
          <div className="flex justify-start items-center gap-4">
            <button className=" bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
              <FiShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button className=" border-2 border-text-muted rounded-lg flex justify-center items-center p-3 hover:bg-text-muted">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
      <section className="py-10">
        <div>
          <ProductDetails />
        </div>
      </section>
    </section>
  );
};

export default page;
