import config from "@/config/config";
import axios from "axios";


/// Post method to login
const loginApi = async({email, password}) =>{
  const response = await axios.post(`${config.apiUrl}/api/auth/login`, {email, password});
  return response;
};

/// Pos method to register 
const signupApi = async ({name, email, password, confirmPassword}) => {
  const response = await axios.post(`${config.apiUrl}/api/auth/register`, {
    name, 
    email,
    password,
    confirmPassword
  })
  return response.data;
}

export { loginApi, signupApi };
