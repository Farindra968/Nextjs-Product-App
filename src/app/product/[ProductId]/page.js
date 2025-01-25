import { getProductId } from "@/services/api/productApi";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosCheckmarkCircle, IoMdStar } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import ProductDetails from "@/components/product/ProductDetails";
import broken_image from "@/assets/images/broken_image.svg";
import { FaUserCircle } from "react-icons/fa";
import ProductReview from "@/components/product/ProductReview";

const page = async ({ params }) => {
  const id = (await params).ProductId;

  const product = await getProductId(id);
  console.log(product);

  const offerPrice = (product.price * 0.8).toFixed(2);
  const discountOffer = ((product.price - offerPrice) / product.price) * 100;

  return (
    <section className="max-w-screen-xl m-auto h-auto bg-white dark:bg-transparent">
      <div className="flex flex-col lg:flex-row justify-center items-center py-6">
        {/* 1st cols [Product Image] */}
        <div className="w-[80%] h-auto p-6 relative">
          <Image
            src={product.imageUrls[0] || broken_image}
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
            <span className=" text-gray-600 dark:text-gray-100 text-sm rounded-md font-Poppins ">
              1.3k Review
            </span>
          </div>
          <h1 className="text-xl capitalize sm:text-2xl md:text-3xl text-primary-800 dark:text-gray-200 font-poppins-bold">
            {product.name}
          </h1>

          {/* Categories, Brand, SKU  */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 border-b-2 border-gray-200 dark:border-gray-700 ">
            <p className=" font-Poppins  text-text-secondary dark:text-gray-200">
              Categories:{" "}
              <span className="text-text-default dark:text-secondary-200 font-poppins-medium ">
                {product.category || "No Category"}
              </span>
            </p>
            <p className=" font-Poppins  text-text-secondary dark:text-gray-100">
              Brand:{" "}
              <span className="text-text-default dark:text-primary-200  font-poppins-medium ">
                {product.brand || "No Brand"}
              </span>
            </p>
            <p className=" font-Poppins  text-text-secondary dark:text-gray-100">
              SKU:{" "}
              <span className="text-text-default dark:text-gray-200 font-poppins-medium ">
                MGFTX202
              </span>
            </p>
            <p className=" flex font-Poppins  text-text-secondary dark:text-gray-100">
              Availability:
               <p className="flex font-poppins-bold ">
                 {product.stock > 0 ? <span className="text-green-600 dark:text-green-300">In Stock <span className="bg-green-600 text-white px-2 rounded-md">{product.stock}</span></span> : <span className="text-red-600 dark:text-red-300 ">Out of Stock</span>}
              </p>
            </p>
          </div>
          {/* Short Description */}
          <div className="py-4">
          <div className="font-Poppins flex items-center gap-2 py-4">
            <FaUserCircle className="text-primary-700 dark:text-primary-400" />
              <p className="text-text-default dark:text-gray-300">Seller: <span className="">{product.createdBy}</span></p> 
          </div>
            <div>
            <p className="text-text-secondary dark:text-gray-300 font-poppins-medium">
                Description:
              </p>
              <p className="text-sm font-Poppins text-text-default dark:text-gray-200 py-2">
                {product.description}
              </p>


            </div>
          </div>
          <button className=" bg-secondary-700 hover:bg-secondary-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
            <IoLogoWhatsapp className="mr-2 h-5 w-5" />
            Order from WhatsApps
          </button>
          <div className="flex items-center gap-4 py-10">
            <p className="text-3xl font-poppins-bold text-primary-700 dark:text-primary-300">
              <span className="text-secondary-500 font-sans font-semibold">
                रु
              </span>{" "}
              {Math.round(offerPrice)}
            </p>
            <p className="text-xl line-through font-poppins-semibold text-secondary-600 dark:text-secondary-400">
              रु {product.price}
            </p>
          </div>
          {/* Cart Buttom */}
          <div className="flex justify-start items-center gap-4">
            <button className=" bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
              <FiShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button className=" border-2 border-text-muted rounded-lg flex justify-center items-center p-3 dark:text-gray-200 hover:dark:text-text-default hover:bg-gray-200">
              <FaRegHeart />
            </button>
          </div>

        </div>
      </div>
      <section className="py-10">
        <div>
          <ProductDetails product={product} />
        </div>
      </section>
    </section>
  );
};

export default page;
