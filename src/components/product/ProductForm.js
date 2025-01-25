"use client";

import { PRODUCT_ROUTE } from "@/constant/routes";
import { editProduct, postProduct } from "@/services/api/productApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const ProductForm = ({ isEditing = false, product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: product,
  });

  const [isLoading, setLoading] = useState(false);
  const [localProductImages, setlocalProductImages] = useState([]);
  const [productImages, setproductImages] = useState([]);

  const router = useRouter();

  async function submitForm(data) {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("category", data.category);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("description", data.description);
    {
      productImages.map((image) => {
      formData.append("images", image)
    })}
    try {
      isEditing ? await editProduct(product.id, data) : await postProduct(formData);

      toast.success(
        isEditing
          ? "Product edited successfully"
          : "Product added successfully",
        {
          autoClose: 1500,
          onClose: () => {
            router.replace(PRODUCT_ROUTE);
          },
        }
      );
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-2xl font-poppins-bold text-primary-900 dark:text-primary-100 mb-6">
        {isEditing ? "Edit Product" : "Add New Product"}
      </h1>
      <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 font-poppins-medium text-primary-800 dark:text-primary-50"
          >
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            required
            {...register("name")}
            placeholder="e.g.: iPhone 16 Pro Max"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="brand"
              className="block mb-1 font-poppins-medium text-primary-800 dark:text-primary-50"
            >
              Brand Name:
            </label>
            <input
              type="text"
              id="brand"
              {...register("brand")}
              placeholder="e.g.: Apple, Samsung, etc."
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-1 font-poppins-medium text-primary-800 dark:text-primary-50"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              {...register("category")}
              placeholder="e.g.: Electronics, Smartphone"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="stock"
              className="block mb-1 font-poppins-medium text-primary-800 dark:text-primary-50"
            >
              Stock:
            </label>
            <input
              type="number"
              id="stock"
              {...register("stock", {
                min: {
                  value: 0,
                  message: "Product Stock must be greater then 0",
                },
              })}
              placeholder="5"
              className="w-full p-2 border rounded"
            />
            <p className="font-Poppins text-secondary-600">
              {errors.stock?.message}
            </p>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-1 font-poppins-medium text-primary-800 dark:text-primary-50"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              {...register("price", {
                min: {
                  value: 0,
                  message: "Product Price must be greater then 0",
                },
              })}
              placeholder="99"
              className="w-full p-2 border rounded"
            />
            <p className="font-Poppins text-secondary-600">
              {errors.price?.message}
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block mb-1 font-poppins-medium text-primary-800 dark:text-primary-50"
          >
            Product Description:
          </label>
          <textarea
            id="description"
            {...register("description")}
            rows={10}
            className="w-full p-2 border font-Poppins rounded"
          />
        </div>

        <div>
          <label
            htmlFor="images"
            className="block mb-1 font-poppins-medium text-primary-800 dark:text-primary-50"
          >
            Product Images:
          </label>
          <input
            type="file"
            multiple
            id="images"
            onChange={(e) => {
              const imageUrls = [];
              const imageFiles = [];
              Array.from(e.target?.files).map((file) => {
                imageFiles.push(file);
                imageUrls.push(URL.createObjectURL(file));
              });
              setproductImages(imageFiles);
              setlocalProductImages(imageUrls);
            }}
            className="w-full p-2 border font-poppins-medium dark:text-primary-100 rounded"
          />
        </div>

        {localProductImages.length > 0 && (
          <div className="flex flex-wrap justify-start gap-3">
            {localProductImages.map((image, index) => (
              <Image
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Product image ${index + 1}`}
                width={250}
                height={250}
                className="object-cover rounded"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-2 text-white bg-primary-600 rounded ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-700"
          }`}
        >
          {isLoading
            ? "Submitting..."
            : isEditing
            ? "Save Changes"
            : "Add Product"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProductForm;
