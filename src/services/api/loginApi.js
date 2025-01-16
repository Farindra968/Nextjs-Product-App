import config from "@/config/config";
import axios from "axios";


/// Post method to login
const loginApi = async({email, password}) =>{
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, {email, password});
  return response.data;
};

export { loginApi };
