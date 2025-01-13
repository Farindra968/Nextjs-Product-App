import React from 'react'
import error from '@/assets/images/error.svg'
import Image from 'next/image'
const ErrorCard = () => {
  return (
    <div className='flex justify-center items-center'>
          <Image src={error} alt='Error' width={250} heighr={250} />
    </div>
  )
}

export default ErrorCard
