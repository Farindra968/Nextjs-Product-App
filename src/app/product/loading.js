import ProductLoading from '@/components/loading/ProductLoading'
import React from 'react'

const loading = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-12 py-'>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4'>
              {
                  [...Array(10)].map((i) => (
                    <ProductLoading key={i}/>
                  ))
        }
      </div>

    </section>
  )
}

export default loading
