import Link from 'next/link'
import React from 'react'

const PrimaryHeading = ({title, href}) => {
  return (
    <div className='py-2 flex justify-between items-center border-b border-gray-500  dark:border-gray-500'>
          <h1 className='font-poppins-semibold text-2xl text-gray-800 dark:text-gray-50' >{title}</h1>
          <Link href={`${href}`} className='font-poppins-medium text-sm text-gray-50 dark:text-gray-50 dark:hover:text-primary-200'>See more</Link>
    </div>
  )
}

export default PrimaryHeading
