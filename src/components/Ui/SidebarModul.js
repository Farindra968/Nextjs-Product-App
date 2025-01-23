import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'

const SidebarModul = ({ children, show=false, setShow, title }) => {
  return (
    <div className={`${show ? 'fixed top-0 left-0 w-72 h-full bg-white dark:bg-gray-800 z-50' : 'hidden'} `}>
          <div className='p-4'>
              <div className='flex justify-between items-center'>
                  <h1 className='font-poppins-semibold text-xl text-primary-700 dark:text-primary-100 '>{title}</h1>
                  <span onClick={()=>setShow(false)}><IoMdCloseCircle className='text-2xl text-primary-800 dark:text-primary-200' /></span>
              </div>
              {children}
        </div>
    </div>
  )
}

export default SidebarModul
