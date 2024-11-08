import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../helpers/AxiosIntance";
import { toast } from "react-toastify";

const initialState = {
  islogin: localStorage.getItem("isLoggedin") === "true" || false,
  data: JSON.parse(localStorage.getItem('data')) || {},
  role: localStorage.getItem("role") || "USER",
};

export const registerUser = createAsyncThunk(
  "registerUser",
  async (newuser) => {
    console.log("register user called..", newuser);
    try {
      const response = AxiosInstance.post(`/user/register`, newuser);
      toast.promise(response, {
        pending: "Registering...",
        success: {
          render({ data }) {
            return data?.data?.message;
          },
        },
        error: {
          render({ data }) {
            return data?.response?.data?.message;
          },
        },
      });
    } catch (error) {
      console.log(error)
    }
  }
);


export const loginUser = createAsyncThunk('loginUser', async (credentials) => {
  try {
    const response = AxiosInstance.post("auth/login", credentials);
    toast.promise(response, {
      pending: "sign in...",

      success: {
        render({ data }) {
          console.log(data);
          return data?.data?.message;
        }
      },

      error: {
        render({ data }) {
          console.log(data.response);
          return data?.response?.data?.message;
        }
      }
    })
    return (await response)?.data?.data;
  } catch (error) {

  }
})

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.islogin = true,
          state.role = "USER",
          state.data = action?.payload,

          localStorage.setItem('isLoggedin', true)
        localStorage.setItem('data', JSON.stringify(action?.payload))
        localStorage.setItem('role', action?.payload?.role)
      })
  },
});

export default AuthSlice.reducer;
