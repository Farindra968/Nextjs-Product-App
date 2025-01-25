import ProductForm from '@/components/product/ProductForm'
import React from 'react'

const AddProduct = () => {
  return (
    <section className='max-w-screen-xl m-auto md:px-14 py-10'>
      <div className='h-auto'>
        <ProductForm/>
      </div>
    </section>
  )
}

export default AddProduct
