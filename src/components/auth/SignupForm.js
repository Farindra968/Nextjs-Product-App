"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { HOME_ROUTE, LOGIN_ROUTE } from "@/constant/routes";
import { signupApi } from "@/services/api/authApi";
import PasswordField from "../Ui/PasswordField";
import EmailField from "../Ui/EmailField";
import InputField from "../Ui/InputField";
import PASSWORD_REGEX from '@/constant/regex.js'
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/auth/authAction";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const {loading, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const password = watch("password"); // towatch the password between password and conform password

  const submitForm = async (data) => {
    dispatch(registerUser(data));
  };
  

  useEffect(() => { 
    toast.error(error)
  }, [error]);
  return (
    <div>
      <div className="pt-10">
        <h1 className="font-poppins-bold text-3xl dark:text-primary-50">
          Signup
        </h1>
        <p className="font-poppins-medium text-text-default dark:text-gray-300">
          Create an Account & Enjoy the shopping
        </p>
      </div>
      <div className="py-4">
        <form onSubmit={handleSubmit(submitForm)}>
          {/* name */}
          <div className="py-2">
            <label
              htmlFor="email"
              className="font-poppins-medium text-text-default dark:text-gray-200"
            >
              Full Name
            </label>
            <InputField
              id="name"
              placeholder="Jhon De"
              {...register("name", {
                required: "Full Name is Required",
              })}
            />
            <p className="font-poppins-medium text-secondary-700">
              {errors.name?.message}
            </p>
          </div>
          {/* Email */}
          <div className="py-2">
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
          <div className="py-2">
            {/* Password */}
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
                  pattern: {
                      value: PASSWORD_REGEX,
                      message: "Password must contain uppercase, lowercase, numbers and special characters.",
                  }
              })}
            />
            <p className="font-poppins-medium text-secondary-700">
              {errors.password?.message}
            </p>
            
            {/* Conform Password */}
            <label
              htmlFor="password"
              className="font-poppins-medium text-text-default  dark:text-gray-200"
            >
              Password
            </label>
            <PasswordField
              id="confirmPassword"
              placeholder="Confirm  Password"
              {...register("confirmPassword", {
                  required: " Confirm Password is required.",
                  validate: (value) => {
                    return value == password || "Passwords do not match.";
                  },
              })}
            />
            <p className="font-poppins-medium text-secondary-700">
              {errors.confirmPassword?.message}
            </p>

            <div className="py-4">
              <input
                type="submit"
                value={loading ? "Submitting" : "Signup"}
                className="bg-primary-800 px-6 p-2 rounded-md font-Poppins text-primary-50"
              />
            </div>
            <p className="font-Poppins  dark:text-gray-200 ">
              Already have account?{" "}
              <Link
                href={`${LOGIN_ROUTE}`}
                className="hover:underline font-poppins-medium text-primary-800 dark:text-primary-100 dark:font-Poppins"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
