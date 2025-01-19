import { loginApi } from "@/services/api/authApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await loginApi(data);
      console.log(response);

      localStorage.setItem("apiToken", response.data.token);
        toast.success('Login Successfully');
      return response.data;
    } catch (error) {
      const errorMessage = toast.error(
        error.response?.data || "An error occurred",
        {
          autoClose: 1500,
        }
      );
      return rejectWithValue(errorMessage);
    }
  }
);

export { loginUser };
