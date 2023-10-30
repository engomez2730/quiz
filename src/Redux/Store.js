// store.js

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSLice"; // Import the user slice

const store = configureStore({
  reducer: {
    user: userReducer, // Add the user reducer to your store
    // Add other reducers if you have any
  },
});

export default store;
