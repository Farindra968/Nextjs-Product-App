import { PRODUCT_GRID, PRODUCT_LIST } from "@/constant/productSwitcher";
import { DARK_MODE, LIGHT_MODE } from "@/constant/theme";

const { createSlice } = require("@reduxjs/toolkit");

const userPreferencesSlice = createSlice({
    name: "userPreferences",
    initialState: {
      theme: DARK_MODE,
      productView: PRODUCT_LIST,
    },
    reducers: {
      toggleTheme: (state) => {
        state.theme = state.theme === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
      },
      toggleProductView: (state) => {
        state.productView = state.productView === PRODUCT_LIST ? PRODUCT_GRID : PRODUCT_LIST;
      },
    },
  });
  
  export const { toggleTheme, toggleProductView } = userPreferencesSlice.actions;
  
  export default userPreferencesSlice.reducer;