import React from 'react'
import { MdEmail } from 'react-icons/md'

const EmailField = (props) => {
  return (
            <div className="w-auto flex justify-between items-center gap-3 border-b-2 border-text-muted my-2 p-1 ">
              <MdEmail className="mx-2  dark:text-gray-100" />
              <input
                type="email"
                {...props}
                className="bg-transparent focus:outline-none w-full dark:text-gray-100"
              />
            </div>
  )
}

export default EmailField
