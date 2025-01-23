import { combineReducers } from "@reduxjs/toolkit"; 
import authReducer from "@/redux/auth/authSlice.js";
import userPreferencesReducer from "@/redux/userPreference/userPrefrenceSlices.js"
const rootReducer = combineReducers({
    auth: authReducer,
    userPreferences: userPreferencesReducer,
});

export default rootReducer;