import React from 'react'

function ProductLoading() {
  return (
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          {/* Image skeleton */}
          <div className="h-64 bg-gray-300 animate-pulse" />
    
          <div className="p-4 space-y-4">
            {/* Title skeleton */}
            <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4" />
    
            {/* Price skeleton */}
            <div className="h-4 bg-gray-300 rounded animate-pulse w-1/4" />
    
            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 rounded animate-pulse" />
              <div className="h-3 bg-gray-300 rounded animate-pulse w-5/6" />
            </div>
    
            {/* Button skeleton */}
            <div className="h-10 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      )
  
    
    
  
}

export default ProductLoading
