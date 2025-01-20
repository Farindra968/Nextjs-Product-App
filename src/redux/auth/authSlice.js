import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    logOutUser: (state) => {
      (state.user = null), localStorage.removeItem("apiToken");
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginUser.pending, (state) => {
        // Loading = Pending
        state.loading = true; // start loading
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // Success = Fullfilled
        state.user = action.payload; // show user data in action.playload
        state.loading = false; // stop loading after getting data
      })
        // failure = rejected
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload; // display error message if error occur in action.playload
        state.loading = false; // after showing error stop loading
      })
              // Loading = Pending
      .addCase(registerUser.pending, (state) => {
        state.loading = true; // start loading
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // Success = Fullfilled
        state.user = action.payload; // register user data in action.playload
        state.loading = false; // stop loading after getting data
      })
              // failure = rejected
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload; // display error message if error occur in action.playload
        state.loading = false; // after showing error stop loading
      }),
});
export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
