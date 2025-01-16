"use client";

import React, { useState } from "react";
import logo from "@/assets/images/MegaMart.svg";
import Image from "next/image";
import { MdEmail, MdPassword } from "react-icons/md";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "@/constant/routes";
import { loginApi } from "@/services/api/loginApi";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter; //function navigate to home page after sucessfull login

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // hide and show password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  async function submitForm(data) {
    setLoading(true);
    try {
      await loginApi(data);

      toast.success("Login Sucessfully", {
        autoClose: 1200,
      });
      router.push(HOME_ROUTE);
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <div>
        <div className="py-6">
          <Image src={logo} alt="Login" width={75} height={75} />
        </div>
        <h1 className="font-poppins-bold text-3xl dark:text-primary-50">Login</h1>
        <p className="font-poppins-medium text-text-default dark:text-gray-300">Welcome back!</p>
      </div>
      <div className="py-10">
        <form onSubmit={handleSubmit(submitForm)}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="font-poppins-medium text-text-default dark:text-gray-200"
            >
              Email
            </label>
            <div className="w-auto flex justify-between items-center gap-3 border-b-2 bg-gray-200 border-text-muted my-2 p-1 ">
              <MdEmail className="mx-2" />
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is Required",
                })}
                placeholder="abc@gmail.com"
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
            <p className="font-poppins-medium text-secondary-700">
              {errors.email?.message}
            </p>
          </div>
          {/* Password */}
          <div className="py-6">
            <label
              htmlFor="password"
              className="font-poppins-medium text-text-default  dark:text-gray-200"
            >
              Password
            </label>
            <div className="w-auto flex justify-between items-center gap-3 border-b-2 bg-gray-200 border-text-muted my-2 p-1 ">
              <MdPassword className="mx-2" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Password is Required",
                })}
                placeholder="*******"
                className="bg-transparent focus:outline-none w-full"
              />
              <p onClick={togglePassword} className="px-4">
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </p>
            </div>
            <p className="font-poppins-medium text-secondary-700">
              {errors.password?.message}
            </p>
            <div className="flex justify-between items-center w-auto">
              <p className="flex items-center gap-2">
                <input type="checkbox" defaultValue={false} />
                <span className="font-poppins-medium text-primary-700 hover:text-primary-800 hover:underline  dark:text-gray-200 ">
                  Remember Me
                </span>
              </p>
              <p className="font-poppins-medium text-primary-700 hover:text-primary-800 hover:underline  dark:text-gray-200 ">
                Forget Password
              </p>
            </div>
            <div className="py-4">
              <input
                type="submit"
                value={loading ? "Submitting" : "Login"}
                className="bg-primary-800 px-6 p-2 rounded-md font-Poppins text-primary-50"
              />
            </div>
            <p className="font-Poppins  dark:text-gray-200 ">
              Don't have an account?{" "}
              <Link
                href={`#`}
                className="hover:underline font-poppins-medium text-primary-800 dark:text-primary-100 dark:font-Poppins"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
