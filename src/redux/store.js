import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../redux/ThemeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
