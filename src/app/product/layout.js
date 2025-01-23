import React from 'react'

export const metadata = {
  title: 'Product',

}

const layout = ({children}) => {
  return (
    <section className='h-full bg-white dark:bg-gray-800'>
      {children}
    </section>
  )
}

export default layout
