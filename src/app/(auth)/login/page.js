"use client"

import LoginForm from '@/components/auth/LoginForm'
import React, { useEffect } from 'react'
import Login from '@/assets/images/auth.png'
import ImageBox from '@/components/Ui/ImageBox.js'
import { HOME_ROUTE, } from '@/constant/routes'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'


const page = () => {
  const router = useRouter(); //function navigate to home page after sucessfull login
  const {user} = useSelector((state)=>state.auth);


  useEffect(() => {
    if (user) {
      router.push(HOME_ROUTE); // Through to Homepage after successfully login
    }
  }, [user, router]);

  return (
    <section className='bg-white dark:bg-gray-800'>
    <section className='max-w-screen-lg mx-auto p-4 md:p-6 '>
    <div className='flex  justify-between items-center h-[90vh] shadow-md rounded-md  '>
      <div className='w-full hidden md:flex justify-center items-center bg-primary-800 h-full rounded-l-md'>
        <ImageBox image={Login}/>
      </div>
      <div className='w-full md:w-[80%] px-6 md:px-12'>
      <LoginForm/>
      </div>
      
      </div>
      </section>
      </section>
  )
}

export default page
