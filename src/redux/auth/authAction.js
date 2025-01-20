import { loginApi, signupApi } from "@/services/api/authApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await loginApi(data);
      console.log(response);

      localStorage.setItem("apiToken", response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signupApi(data);
      console.log(response);

      localStorage.setItem("apiToken", response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { loginUser, registerUser };
