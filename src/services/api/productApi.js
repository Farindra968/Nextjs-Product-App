import config from '@/config/config'
import axios from 'axios'

 const getProduct = async() => {
  const response = await axios.get(`${config.apiUrl}/api/products?limit=30`);
   return response.data;
}

const getProductId = async(id) => {
  const response = await axios.get(`${config.apiUrl}/api/products/${id}`)
  return response.data;
}

export  {getProduct, getProductId}
