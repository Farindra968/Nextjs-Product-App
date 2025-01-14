import config from '@/config/config'
import axios from 'axios'

 const getProduct = async() => {
  const response = await axios.get(`${config.apiUrl}/api/products?limit=100`);
   return response.data;
}

const getProductId = async(id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`)
  return response.data;
}

const postProduct = async (data) => {
  const response = await axios.post(`${config.apiUrl}/api/products/`, data, {
    headers: {
      Authorization: `Bearer ${config.apiToken}`
    }
  }
  )
  return response.data
}

export  {getProduct, getProductId, postProduct }
