import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AxiosInstance from "../../helpers/AxiosIntance";
import { toast } from "react-toastify";
const initialState = {
  islogin: localStorage.getItem("isLoggedin") === "true" || false,
  data: JSON.parse(localStorage.getItem("data")) || {},
  role: localStorage.getItem("role") || "USER",
  expiry: localStorage.getItem("expiry") || 0,
};

export const registerUser = createAsyncThunk("registerUser", async (data) => {
  try {
    const { user, redirect } = data;
    const response = AxiosInstance.post(`/user/register`, user);
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

    if ((await response).data.success === true) {
      redirect("/signup");
    }

    return (await response).data;
  } catch (error) {
    console.log(error);
  }
});

export const loginUser = createAsyncThunk(
  "loginUser",
  async (data, { dispatch }) => {
    try {
      const { credentials, redirect } = data;
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
      });

      const tokenExpiry = (await response)?.data?.data?.expiry;

      if (tokenExpiry && !isNaN(tokenExpiry)) {
        const remainingTime = tokenExpiry - Date.now();

        setTimeout(() => {
          dispatch(logoutUser());
        }, remainingTime);
      }

      if ((await response).data.success === true) {
        redirect("/");
      }
      return (await response)?.data;
    } catch (error) {}
  }
);

export const updateUser = createAsyncThunk("updateUser", async (newdata) => {
  try {
    const response = AxiosInstance.post("user/updateuser", newdata);
    toast.promise(response, {
      pending: "updating user...",
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
    });

    return (await response)?.data?.data;
  } catch (error) {}
});

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
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          (state.islogin = true),
            (state.role = "USER"),
            (state.data = action?.payload?.data?.user),
            localStorage.setItem("isLoggedin", true);
          localStorage.setItem(
            "data",
            JSON.stringify(action?.payload?.data?.user)
          );
          localStorage.setItem("role", action?.payload?.data?.user.role);
          localStorage.setItem(
            "expiry",
            action?.payload?.data?.expiry.toString()
          );
        } else {
          localStorage.setItem("isLoggedin", false);
          localStorage.setItem("data", JSON.stringify({}));
          localStorage.setItem("role", "");
          localStorage.setItem("expiry", "");
        }
      })

      .addCase(logoutUser.fulfilled, (state, action) => {
        (state.islogin = false), (state.role = ""), (state.data = null);

        localStorage.setItem("isLoggedin", false);
        localStorage.setItem("data", JSON.stringify({}));
        localStorage.setItem("role", "");
        localStorage.setItem("expiry", "");
      })

      .addCase(updateUser.pending, (state, action) => {
        console.log("auth slice", action.payload);
        (state.islogin = false),
          (state.role = ""),
          (state.data = action?.payload),
          localStorage.setItem("isLoggedin", true);
        localStorage.setItem("data", JSON.stringify(action?.payload));
        localStorage.setItem("role", action?.payload?.role);
        localStorage.setItem("expiry", action?.payload?.expiry.toString());
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        console.log("auth slice", action.payload);
        (state.islogin = true),
          (state.role = "USER"),
          (state.data = action?.payload),
          localStorage.setItem("isLoggedin", true);
        localStorage.setItem("data", JSON.stringify(action?.payload));
        localStorage.setItem("role", action?.payload?.role);
        localStorage.setItem("expiry", action?.payload?.expiry.toString());
      });
  },
});

export default AuthSlice.reducer;
