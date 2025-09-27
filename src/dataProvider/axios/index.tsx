import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
 // Ensure this path is correct

 interface ErrorResponse {
    errorCode?: number; // Optional, as it might not always exist
    message?: string;   // Add other properties if needed
  }

// Define the base URL environment variables
const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL as string;
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const NOCO_URL = process.env.NEXT_PUBLIC_NOCO_URL as string;
const IAM_URL = process.env.NEXT_PUBLIC_IAM_URL as string;
const EVENT_API_URL = process.env.NEXT_PUBLIC_EVENT_API_URL as string;

// Create default Axios instance
const defaultInstance: AxiosInstance = axios.create({
  baseURL: CMS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Create specialized Axios instances
export const carbonCreditInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const nocolocoInstance: AxiosInstance = axios.create({
  baseURL: NOCO_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const iamInstance: AxiosInstance = axios.create({
  baseURL: IAM_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const strapiInstance: AxiosInstance = axios.create({
  baseURL: CMS_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const eventInstance: AxiosInstance = axios.create({
  baseURL: EVENT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default defaultInstance;

// Helper function to get the access token from localStorage
const getToken = (): string | null => {
  if (typeof window !== "undefined" && localStorage.getItem("accessToken")) {
    return localStorage.getItem("accessToken");
  }
  return null;
};

// Request interceptor for carbonCreditInstance
carbonCreditInstance.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    if (
      !request.url?.includes("login") &&
      request.url?.includes("v1") &&
      !request.url?.includes("open")
    ) {
      const token = getToken();
      if (token && request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor for carbonCreditInstance
carbonCreditInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data; // Return only the data part of the response
  },
  (error: AxiosError<ErrorResponse>) => {
    const responseURL = error.request?.responseURL as string;
    const status = error.response?.status;
    const errorCode = error.response?.data?.errorCode; // Use type assertion for errorCode

    if (responseURL?.includes("login")) {
      return Promise.reject(error);
    }

    if (status === 401 || errorCode === 403) {
      // logout(); // Uncomment this if you want to call the logout function
    }

    return Promise.reject(error);
  }
);