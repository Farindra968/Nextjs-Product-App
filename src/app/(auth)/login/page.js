import ImageBox from '@/components/auth/ImageBox'
import LoginForm from '@/components/auth/LoginForm'
import React from 'react'

const page = () => {
  return (
    <section className='max-w-screen-lg mx-auto p-4 md:p-6 '>
    <div className='flex  justify-between items-center h-[90vh] shadow-md rounded-md '>
      <div className='w-full hidden md:flex justify-center items-center bg-primary-800 h-full rounded-l-md'>
        <ImageBox/>
      </div>
      <div className='w-[80%] px-6 md:px-12'>
      <LoginForm/>
      </div>
      
      </div>
      </section>
  )
}

export default page
