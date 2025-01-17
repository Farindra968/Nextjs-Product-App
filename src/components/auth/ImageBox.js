import React from 'react'
import auth from '@/assets/images/auth.png'
import Image from 'next/image'
const ImageBox = ({image}) => {
  return (
    <div>
          <Image src={image} alt='Login/Signup' height={450} width={450} className=' ' />
    </div>
  )
}

export default ImageBox
