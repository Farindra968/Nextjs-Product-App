import React from 'react'

function ProductLoading() {
  return (
   <section>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden p-4">
        <div className="flex justify-center w-full bg-gray-300 rounded-md h-52 animate-pulse items-center">
            
        </div>
        <div className="py-2 px-2">
          <div className='py-2 bg-gray-300 rounded-md animate-pulse'>
          </div>
          <div className='py-4 flex gap-4'>
          <div className='py-2 w-20 bg-gray-300 rounded-md animate-pulse'>
          </div>
          <div className='py-2 w-20 bg-gray-300 rounded-md animate-pulse'>
          </div>
          </div>
          <div className='py-2 w-32 bg-gray-300 rounded-md animate-pulse'>
          </div>
      </div>
    </div>
    </section>
  )
}

export default ProductLoading
