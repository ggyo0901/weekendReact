import axios from "axios";
import { TokenService } from "../api/TokenService";
export const axiosApiInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const access_token = TokenService.get(process.env.REACT_APP_TOEKN_KEY);

    if (!access_token) {
      return config;
    } else {
      config.headers = {
        Authorization: `Bearer ${access_token}`,
      };
      return config;
    }
  },
  (error) => {
    throw new Error(error);
  }
);
