import React from 'react'

export const metadata = {
    title: 'Product By Categories'
}

const categoryLayout = ({children}) => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      {children}
    </div>
  )
}

export default categoryLayout
