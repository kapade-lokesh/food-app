import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Slices/AuthSilce";
const Store = configureStore({
  reducer: {
    Auth: AuthReducer,
  },
});

export default Store;