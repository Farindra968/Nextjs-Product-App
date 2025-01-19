import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loginUser.pending, (state) => { // Loading = Pending
          state.loading = true; // start loading
      }) 
      .addCase(loginUser.fulfilled, (state, action) => { // Success = Fullfilled
        state.user = action.payload; // show user data in action.playload
        state.loading = false; // stop loading after getting data
      }) 
      .addCase(loginUser.rejected, (state, action) => { // failure = rejected
        state.user = action.payload; // display error message if error occur in action.playload
        state.loading = false; // after showing error stop loading
      }), 
});

export default authSlice.reducer;
