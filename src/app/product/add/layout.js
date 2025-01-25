import React from 'react'

export const metadata= {
  title: 'Add Product',
}

const layout = ({children}) => {
  return (
    <section className='dark:bg-gray-800 h-auto'>
      {children}
    </section>
  )
}

export default layout
