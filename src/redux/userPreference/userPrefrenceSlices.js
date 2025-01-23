import { DARK_MODE, LIGHT_MODE } from "@/constant/theme";

const { createSlice } = require("@reduxjs/toolkit");

const userPreferencesSlice = createSlice({
    name: "userPreferences",
    initialState: {
      theme: DARK_MODE,
    },
    reducers: {
      toggleTheme: (state) => {
        state.theme = state.theme === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
      },
    },
  });
  
  export const { toggleTheme } = userPreferencesSlice.actions;
  
  export default userPreferencesSlice.reducer;