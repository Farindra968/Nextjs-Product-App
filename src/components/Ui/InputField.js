import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const InputField = (props) => {
  return (
            <div className="w-auto flex justify-between items-center gap-3 border-b-2 border-text-muted my-2 p-1 ">
              <FaUserCircle className="mx-2" />
              <input
                type="text"
                {...props}
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
  )
}

export default InputField
