"use client";

import React, { useEffect, useState } from "react";
import logo from "@/assets/images/MegaMart.svg";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { HOME_ROUTE, SIGNUP_ROUTE } from "@/constant/routes";
import { loginApi } from "@/services/api/authApi";
import PasswordField from "../Ui/PasswordField";
import EmailField from "../Ui/EmailField";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/auth/authAction";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {loading, error} = useSelector((state)=>state.auth);


  const dispatch = useDispatch();
  const submitForm = async (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {

    toast.error(error, { autoClose: 1500 });
   }, [error]);
  return (
    <div>
      <div>
        <h1 className="font-poppins-bold text-3xl dark:text-primary-50">
          Login
        </h1>
        <p className="font-poppins-medium text-text-default dark:text-gray-300">
          Welcome back!
        </p>
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
            <EmailField
              id="email"
              placeholder="abc@gmail.com"
              {...register("email", {
                required: "Email is Required",
              })}
            />
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
            <PasswordField
              id="password"
              placeholder="Your password"
              {...register("password", {
                required: "Password is required.",
              })}
            />
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
                href={`${SIGNUP_ROUTE}`}
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
