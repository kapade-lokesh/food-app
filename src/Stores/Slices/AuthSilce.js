import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../helpers/AxiosIntance";
import { toast } from "react-toastify";

const initialState = {
  islogin: localStorage.getItem("isLoggedin") === "true" || false,
  data: JSON.parse(localStorage.getItem("data")) || {},
  role: localStorage.getItem("role") || "USER",
  expiry: localStorage.getItem("expiry") || 0,
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
        autoClose: 800,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (credentials, { dispatch }) => {
    try {
      const response = AxiosInstance.post("auth/login", credentials);
      toast.promise(response, {
        pending: "sign in...",

        success: {
          render({ data }) {
            console.log(data?.data?.data);
            return data?.data?.message;
          },
        },

        error: {
          render({ data }) {
            console.log(data.response);
            return data?.response?.data?.message;
          },
        },
        autoClose: 800,
      });

      const tokenExpiry = (await response)?.data?.data?.expiry;

      if (tokenExpiry && !isNaN(tokenExpiry)) {
        const remainingTime = tokenExpiry - Date.now();

        console.log("Remaining time in milliseconds:", remainingTime);

        setTimeout(() => {
          dispatch(logoutUser());
        }, remainingTime);
      }
      return (await response)?.data?.data;
    } catch (error) {}
  }
);

export const logoutUser = createAsyncThunk("logoutUser", async () => {
  toast({
    success: "Login Expires",
  });
  window.location.href = "/signup";
});

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        (state.islogin = true),
          (state.role = "USER"),
          (state.data = action?.payload),
          localStorage.setItem("isLoggedin", true);
        localStorage.setItem("data", JSON.stringify(action?.payload?.user));
        localStorage.setItem("role", action?.payload?.user?.role);
        localStorage.setItem("expiry", action?.payload?.expiry.toString());
      })

      .addCase(logoutUser.fulfilled, (state, action) => {
        (state.islogin = false), (state.role = ""), (state.data = null);

        localStorage.setItem("isLoggedin", false);
        localStorage.setItem("data", JSON.stringify({}));
        localStorage.setItem("role", "");
        localStorage.setItem("expiry", "");
      });
  },
});

export default AuthSlice.reducer;
