import logout from "@/utils/logout";
import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";


interface ErrorResponseData {
  errorCode?: number;
}

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};

Api.interceptors.request.use(
  (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (
      request.url &&
      !request.url.includes("login") &&
      request.url.includes("v1")
    ) {
      const token = getToken();
      if (token && request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return request;
  },
  (error: AxiosError) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response: AxiosResponse) => response?.data,
  (error: AxiosError) => {
    if (error?.request?.responseURL?.includes("login")) {
      return Promise.reject(error);
    }

    if (
      error.response?.status === 401 ||
      (error.response?.data as ErrorResponseData)?.errorCode === 403
    ) {
      logout();
    }

    return Promise.reject(error);
  }
);

export default Api;
