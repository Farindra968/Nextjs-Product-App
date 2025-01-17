import React, { useState } from "react";
import { MdPassword } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const PasswordField = (props) => {
  const [showPassword, setShowPassword] = useState(false); // hide and show password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-auto flex justify-between items-center gap-3 border-b-2 border-text-muted my-2 p-1 ">
      <MdPassword className="mx-2" />
      <input
        type={showPassword ? "text" : "password"}
        {...props}
        className="bg-transparent focus:outline-none w-full"
      />
      <p onClick={togglePassword} className="px-4">
        {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
      </p>
    </div>
  );
};

export default PasswordField;
