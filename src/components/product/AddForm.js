"use client";

import { postProduct } from "@/services/api/productApi";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddForm = () => {
  const { register, handleSubmit } = useForm();
  const [ isLoading, setLoading ] = useState(false);

  async function submitForm(data) {
    setLoading(true);
    try {
      await postProduct(data);
      toast.success('Product add Sucessfully')
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit(submitForm)}>
        <label
          htmlFor="product name"
          className="font-poppins-medium text-primary-800"
        >
          Product Name:
        </label>
        <input
          type="text"
          id="name"
          required
          {...register("name")}
          placeholder="e.g.: Iphone 16 Pro Max "
          className="my-2 w-full ring-2 ring-primary-300 p-2 px-4  rounded-md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-subgrid gap-4 ">
          <div>
            <label
              htmlFor="brand"
              className="font-poppins-medium text-primary-800"
            >
              Brand Name:
            </label>
            <input
              type="text"
              id="brand"
              {...register("brand")}
              placeholder="e.g.: Apple, Samsung, etc "
              className="font-Poppins my-2 w-full ring-2 ring-primary-300 focus:outline-none p-2 px-4  rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="font-poppins-medium text-primary-800"
            >
              Category Name:
            </label>
            <input
              type="text"
              id="category"
              {...register("category")}
              placeholder="e.g.: Electronic, Smartphone "
              className="font-Poppins my-2 w-full ring-2 ring-primary-300 focus:outline-none p-2 px-4  rounded-md"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="category"
              className="font-poppins-medium text-primary-800"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              {...register("price")}
              placeholder="99 "
              className="font-Poppins my-2 w-full ring-2 ring-primary-300 focus:outline-none p-2 px-4  rounded-md"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="image"
            className="font-poppins-medium text-primary-800"
          >
            Price:
          </label>
          <input
            type="url"
            id="url"
            name="url"
            {...register("url")}
            placeholder="Product image Link "
            className="font-Poppins my-2 w-full ring-2 ring-primary-300 focus:outline-none p-2 px-4  rounded-md"
          />
        </div>
        <input
          type="submit"
          value={isLoading ?'Submiting':'Submit'}
          className="font-poppins-semibold text-white outline-none bg-primary-500 focus:outline-2 outline-primary-500 rounded-md outline-offset-2 my-4  px-6 py-2"
        />
      </form>
      <ToastContainer />

    </section>
  );
};

export default AddForm;
