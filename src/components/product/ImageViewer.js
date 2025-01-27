"use client"

import Image from "next/image"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"

function ZoomImage({ url, zoom = false, setZoom }) {
  return (
    <div className={zoom ? "block" : "hidden"}>
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 p-4 md:p-10">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          onClick={() => setZoom(false)}
        >
          <RxCross2 className="h-8 w-8" />
        </button>
        <div className="flex items-center justify-center h-full">
          <Image
            src={url || "/placeholder.svg"}
            alt="Product details img"
            width={1200}
            height={1200}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

function ProductImageViewer({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  return (
    <div className="max-w-2xl mx-auto">
      <ZoomImage url={product.imageUrls[currentImageIndex]} zoom={zoom} setZoom={setZoom} />
      <div className="mb-4 md:h-[450px] overflow-hidden ">
        <Image
          src={product.imageUrls[currentImageIndex] || "/placeholder.svg"}
          alt="Product details img"
          width={300}
          height={300}
          className="w-full md:h-[450px] object-fill transition-transform duration-300 hover:scale-105 cursor-zoom-in"
          onClick={() => setZoom(true)}
        />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {product.imageUrls.map((url, index) => (
          <button
            key={index}
            className={`relative overflow-hidden rounded-md ${
              currentImageIndex === index ? "ring-2 ring-blue-500" : "hover:ring-2 hover:ring-gray-300"
            } focus:outline-none transition-all duration-200 ease-in-out`}
            onClick={() => setCurrentImageIndex(index)}
          >
            <Image
              src={url || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-auto object-cover aspect-square"
            />
            <div
              className={`absolute inset-0 bg-black ${
                currentImageIndex === index ? "bg-opacity-0" : "bg-opacity-20"
              } transition-opacity duration-200 ease-in-out`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductImageViewer

