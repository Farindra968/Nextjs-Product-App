'use client'

import { PRODUCT_LIST } from '@/constant/productSwitcher'
import { toggleProductView } from '@/redux/userPreference/userPrefrenceSlices'
import React from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaList } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const ProductSwitcher = () => {
    const { productView } = useSelector((state) => state.userPreferences)
    const dispatch = useDispatch();

  function toggleProductSwitcher() {
      dispatch(toggleProductView());
  }
  return (
    <div>
          <button onClick={toggleProductSwitcher} className='w-8 h-8 flex items-center justify-center dark:bg-primary-700 rounded-md'>
              {productView === PRODUCT_LIST ? <  BsGrid3X3GapFill className='mx-auto text-xl text-primary-900' />
                  : < FaList    className='mx-auto text-xl text-primary-900' />
              }
      </button>
    </div>
  )
}

export default ProductSwitcher
