import { PRODUCT_ROUTE } from '@/constant/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { FiShoppingCart, FiStar } from 'react-icons/fi'
import broken_image from '@/assets/images/broken_image.svg'


const ProductCard = ({ product }) => {
  const offerPrice = (product.price * 0.8).toFixed(2)
  const discountOffer= ((product.price - offerPrice) / product.price * 100)

  return (
    <section>
   <div className="bg-white rounded-xl overflow-hidden  transition-all duration-300 shadow-md">
      <div className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={product.url|| broken_image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          <BiHeart className="h-5 w-5 text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-300" />
        </div>
          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          Save {Math.round(discountOffer)}%
          </div>
      </div>
      <div className="px-4 py-6">
        <div className="text-sm inline-block font-semibold px-2 bg-primary-300 rounded-md text-primary-900 mb-2">{product.brand || "No Category"}</div>
        <h2 className="h-12 text-[18px] font-semibold text-primary-800 mb-2">{product.name}</h2>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < 4.5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-500 text-sm ml-2">20 Review</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className='flex flex-col'>
            <span className="text-2xl font-bold text-primary-800">रु {Math.round(offerPrice)}</span>

              <span className="text-sm text-text-muted line-through ml-2">रु {product.price }</span>
          </div>
            <span className="bg-primary-100  text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
              Save {Math.round(discountOffer)}%
            </span>
          </div>
          <Link href={`${PRODUCT_ROUTE}/${product._id}`}>
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300">
          <FiShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </button>
          </Link>
      </div>
    </div>
    </section>
  )
}

export  {ProductCard}
