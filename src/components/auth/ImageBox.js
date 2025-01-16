import React from 'react'
import auth from '@/assets/images/auth.png'
import Image from 'next/image'
const ImageBox = () => {
  return (
    <div>
          <Image src={auth} alt='Login/Signup' height={400} width={400} className=' ' />
    </div>
  )
}

export default ImageBox
