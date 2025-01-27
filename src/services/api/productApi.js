import config from "@/config/config";
import axios from "axios";
import { apiToken } from "./autToken";
import { formatSearchParams } from "@/helpers/formatParams";

/// Fetching Product Data [R]
const getProduct = async (searchParams) => {
  const query = formatSearchParams(searchParams)
  const response = await axios.get(`${config.apiUrl}/api/products?${query}`);
  return response.data;
};

/// Fetching Product Data by Id [R]
const getProductId = async (id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`);
  return response.data;
};

// Adding Product [C]
const postProduct = async (data) => {
  const response = await axios.post(`${config.apiUrl}/api/products/`, data, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
  return response.data;
};

/// Updating or Editing Product Data [U]
const editProduct = async (id, data) => {
  const response = await axios.put(
    `${config.apiUrl}/api/products/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );
  return response.data;
};


/// Get Product by category using Get Method
const getProductByCategory = async (category) => {
  const response = await axios.get(`${config.apiUrl}/api/products/category/${category}`);

  return response.data;
}

export { getProduct, getProductId, postProduct, editProduct, getProductByCategory };
