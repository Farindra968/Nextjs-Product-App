import { loginApi, signupApi } from "@/services/api/authApi";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await loginApi(data);
      console.log(response);

      localStorage.setItem("apiToken", response.data.token);
      toast.success("Login Successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const logoutUser = createAsyncThunk(
  "auth/logout",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signupApi(data);
      localStorage.removeItem("apiToken", response.data.token);
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { loginUser };
