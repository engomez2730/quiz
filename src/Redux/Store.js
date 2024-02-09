// store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSLice"; // Import the user
import LoginSlice from "./Slices/LoginSlice";

const store = configureStore({
  reducer: {
    user: userReducer, // Add the user reducer to your store
    login: LoginSlice,
  },
});

export default store;
