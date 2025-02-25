import ImageBox from '@/components/Ui/ImageBox'
import SignupForm from '@/components/auth/SignupForm'
import React from 'react'
import signup from '@/assets/images/signup.png'
import { useSelector } from 'react-redux'

const page = () => {

  return (
<section className='bg-white dark:bg-gray-800'>
    <section className='max-w-screen-lg mx-auto p-4 md:p-6 '>
    <div className='flex flex-row-reverse  justify-between items-center h-[100vh] shadow-md rounded-md '>
      <div className='w-full hidden md:flex justify-center items-center bg-primary-800 h-full rounded-r-md'>
        <ImageBox image={signup}/>
      </div>
      <div className='w-full md:w-[80%] px-6 md:px-12'>
      <SignupForm/>
      </div>
      
      </div>
      </section>
    </section>
  )
}

export default page
