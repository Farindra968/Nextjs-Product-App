import ProductLoading from '@/components/loading/ProductLoading'
import React from 'react'

const loading = () => {
  return (
    <div className='max-w-screen-xl m-auto px-14 py-10'>
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 py-4`}>
              <ProductLoading />
              <ProductLoading/>
              <ProductLoading/>
              <ProductLoading/>
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
              <ProductLoading/>
                </div>
    </div>
  )
}

export default loading
