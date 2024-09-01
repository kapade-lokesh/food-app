import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../helpers/AxiosIntance";
import axios from "axios";
import { toast } from "react-toastify";
import { VscGlobe } from "react-icons/vsc";

const initialState = {
  islogin: false,
  data: {},
  role: "",
};

export const registerUser = createAsyncThunk(
  "registerUser",
  async (newuser) => {
    console.log("register user called..", newuser);
    try {
      const response = AxiosInstance.post("/user/register", newuser);
      toast.promise(response, {
        pending: "Registering...",
        success: {
          render({ data }) {
            console.log(data);
            return data?.data?.message;
          },
        },
        error: {
          render({ data }) {
            console.log(data);
            return data?.response?.data?.message?.massage;
          },
        },
      });
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {});
  },
});

export default AuthSlice.reducer;
