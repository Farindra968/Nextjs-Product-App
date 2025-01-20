import { combineReducers } from "@reduxjs/toolkit"; 
import authReducer from "@/redux/auth/authSlice.js";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;