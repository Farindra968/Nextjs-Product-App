'use client'
import React from 'react'
import { ProductCard, ProductCardList } from './ProductCard'
import { PRODUCT_LIST } from '@/constant/productSwitcher'
import { useSelector } from 'react-redux'

const List = ({ productData }) => {
    const { productView } = useSelector((state) => state.userPreferences)
  return (
    <div>
              
          {productView === PRODUCT_LIST ? <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4`}
      >
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
          </div> : 
              <div className='flex flex-col gap-4 py-6'>
                  {productData.map((product) => (
                      <ProductCardList key={product.id} product={product} />
                  ))}
                  </div>
               }
    </div>
  )
}

export default List
