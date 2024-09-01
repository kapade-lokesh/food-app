import axios from "axios";

const AxiosInstance = axios.create();

AxiosInstance.defaults.baseURL = import.meta.env.VITE_BASE_URL;
AxiosInstance.defaults.withCredentials = true;

export default AxiosInstance;
