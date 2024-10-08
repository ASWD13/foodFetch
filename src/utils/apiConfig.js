import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const appAxios = axios.create({
  baseURL: BASE_URL,
});

const excludeAuthRoutes = ["/auth/local", "/auth/local/register"];
const token = localStorage.getItem("accessToken");

appAxios.interceptors.request.use(
  (config) => {
    const isNotSSO = excludeAuthRoutes.some((route) =>
      config.url?.includes(route)
    );

    if (token && !isNotSSO) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => {
    // Handle error
    return Promise.reject(error);
  }
);
