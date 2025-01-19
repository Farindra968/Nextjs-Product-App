import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/auth/authSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export { store };