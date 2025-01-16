import config from "@/config/config";
import axios from "axios";
import { apiToken } from "./autToken";

/// Fetching Product Data [R]
const getProduct = async () => {
  const response = await axios.get(`${config.apiUrl}/api/products?limit=100&sort={"createdAt":-1}`);
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

export { getProduct, getProductId, postProduct, editProduct };
