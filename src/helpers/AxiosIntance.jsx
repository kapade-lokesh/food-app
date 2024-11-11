import axios from "axios";

const AxiosInstance = axios.create();

AxiosInstance.defaults.baseURL = import.meta.env.VITE_BASE_URL;
AxiosInstance.defaults.withCredentials = true;

AxiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  async (error) => {
    // Handle 401 Unauthorized error for expired tokens
    if (error.response && error.response.status === 401) {
      if (error.response.data.message === "Token has expired") {
        localStorage.removeItem("authToken");
        localStorage.removeItem("isLoggedin");
        localStorage.removeItem("data");
        localStorage.removeItem("role");

        alert("Session expired. Please log in again.");
        window.location.href = "/signup";
      }
    }
    return Promise.reject(error); // Reject the error for further handling
  }
);

export default AxiosInstance;
