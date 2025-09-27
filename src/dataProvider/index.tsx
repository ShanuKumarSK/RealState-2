import { default as Api } from "@/services/AxiosInterceptor";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  iamInstance,
  strapiInstance,
  nocolocoInstance,
  eventInstance,
} from "./axios";
// import { cookies } from 'next/headers'

// Define the type for the axios instance type parameter
type AxiosInstanceType = "strapi" | "iam" | "nclc" | "event" | "default";

// Helper function to fetch the appropriate Axios instance
const fetchAxiosInstanceType = (type: AxiosInstanceType): AxiosInstance => {
  switch (type) {
    case "strapi":
      return strapiInstance;
    case "iam":
      return iamInstance;
    case "nclc":
      return nocolocoInstance;
    case "event":
      return eventInstance;
    default:
      return Api; // Use the default Api instance from AxiosInterceptor
  }
};

// Define the structure of the fetcher object
const fetcher = {
  /**
   * @function get To fetch a resource
   * @param {string} url API path
   * @param {AxiosInstanceType} axiosInstanceType Type of Axios instance to use
   * @param {AxiosRequestConfig} paramConfigs Axios request configuration
   * @param {{ log: boolean }} logConfigs Logging configuration
   * @returns {Promise<AxiosResponse>} Axios response
   */
  get: async (
    url: string,
    axiosInstanceType: AxiosInstanceType = "default",
    paramConfigs: AxiosRequestConfig = {}
    // logConfigs: { log: boolean } = { log: false }
  ): Promise<AxiosResponse> => {
    const instance = fetchAxiosInstanceType(axiosInstanceType);
    return instance
      .request({
        url,
        method: "GET",
        ...paramConfigs,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: unknown) => {
        throw err;
      });
  },

  /**
   * @function getEventData To fetch event data
   * @param {string} url API path
   * @param {boolean} isToken Whether to include an access token
   * @param {AxiosInstanceType} axiosInstanceType Type of Axios instance to use
   * @param {AxiosRequestConfig} paramConfigs Axios request configuration
   * @param {{ log: boolean }} logConfigs Logging configuration
   * @returns {Promise<AxiosResponse>} Axios response
   */
  getNclcData: async (
    url: string,
    isToken: boolean,
    axiosInstanceType: AxiosInstanceType = "nclc",
    paramConfigs: AxiosRequestConfig = {}
    // logConfigs: { log: boolean } = { log: false }
  ): Promise<AxiosResponse> => {
    const instance = fetchAxiosInstanceType(axiosInstanceType);
    // const cookie = await cookies()

    if (isToken) {
      const token = process.env.NEXT_PUBLIC_NOCO_TOKEN as string;

      if (token) {
        paramConfigs = {
          ...paramConfigs,
          headers: {
            ...paramConfigs.headers,
            Authorization: `Bearer ${token}`,
          },
        };
      }
    }

    return instance
      .request({
        url,
        method: "GET",
        ...paramConfigs,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: unknown) => {
        throw err;
      });
  },

  /**
   * @function post To create a resource
   * @param {string} url API path
   * @param {object} data Body to send
   * @param {AxiosInstanceType} axiosInstanceType Type of Axios instance to use
   * @param {AxiosRequestConfig} paramConfigs Axios request configuration
   * @returns {Promise<AxiosResponse>} Axios response
   */
  post: async (
    url: string,
    data: unknown,
    axiosInstanceType: AxiosInstanceType = "default",
    paramConfigs: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> => {
    const instance = fetchAxiosInstanceType(axiosInstanceType);

    return instance
      .request({
        url,
        method: "POST",
        data,
        ...paramConfigs,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: unknown) => {
        throw err;
      });
  },

  /**
   * @function postEventData To create event data
   * @param {string} url API path
   * @param {object} data Body to send
   * @param {boolean} isToken Whether to include an access token
   * @param {boolean} isMedia Whether the request contains media
   * @param {AxiosInstanceType} axiosInstanceType Type of Axios instance to use
   * @param {AxiosRequestConfig} paramConfigs Axios request configuration
   * @returns {Promise<AxiosResponse>} Axios response
   */
  postNclcData: async (
    url: string,
    data: unknown,
    isToken: boolean,
    isMedia: boolean,
    axiosInstanceType: AxiosInstanceType = "nclc",
    paramConfigs: AxiosRequestConfig = {}
  ): Promise<AxiosResponse> => {
    const instance = fetchAxiosInstanceType(axiosInstanceType);
    // const cookie = await cookies()

    if (isToken) {
      const token = process.env.NEXT_PUBLIC_NOCO_TOKEN as string;
      if (token) {
        paramConfigs = {
          ...paramConfigs,
          headers: {
            ...paramConfigs.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": isMedia
              ? "multipart/form-data"
              : "application/json",
          },
        };
      }
    }

    return instance
      .request({
        url,
        method: "POST",
        data,
        ...paramConfigs,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: unknown) => {
        throw err;
      });
  },

  /**
   * @function put To update a full resource
   * @param {string} url API path
   * @param {object} data Body to send
   * @param {AxiosRequestConfig} paramConfigs Axios request configuration
   * @param {AxiosInstanceType} axiosInstanceType Type of Axios instance to use
   * @returns {Promise<AxiosResponse>} Axios response
   */
  put: async (
    url: string,
    data: unknown,
    paramConfigs: AxiosRequestConfig = {},
    axiosInstanceType: AxiosInstanceType = "default"
  ): Promise<AxiosResponse> => {
    const instance = fetchAxiosInstanceType(axiosInstanceType);
    return instance
      .request({
        url,
        method: "PUT",
        data,
        ...paramConfigs,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: unknown) => {
        throw err;
      });
  },

  /**
   * @function patch To update partial data of a resource
   * @param {string} url API path
   * @param {object} data Body to send
   * @param {AxiosRequestConfig} paramConfigs Axios request configuration
   * @param {AxiosInstanceType} axiosInstanceType Type of Axios instance to use
   * @returns {Promise<AxiosResponse>} Axios response
   */
  patch: async (
    url: string,
    data: unknown,
    paramConfigs: AxiosRequestConfig = {},
    axiosInstanceType: AxiosInstanceType = "default"
  ): Promise<AxiosResponse> => {
    const instance = fetchAxiosInstanceType(axiosInstanceType);
    return instance
      .request({
        url,
        method: "PATCH",
        data,
        ...paramConfigs,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: unknown) => {
        throw err;
      });
  },

  /**
   * @function delete To delete a resource
   * @param {string} url API path
   * @param {AxiosRequestConfig} paramConfigs Axios request configuration
   * @param {AxiosInstanceType} axiosInstanceType Type of Axios instance to use
   * @returns {Promise<AxiosResponse>} Axios response
   */
  delete: async (
    url: string,
    paramConfigs: AxiosRequestConfig = {},
    axiosInstanceType: AxiosInstanceType = "default"
  ): Promise<AxiosResponse> => {
    const instance = fetchAxiosInstanceType(axiosInstanceType);
    return instance
      .request({
        url,
        method: "DELETE",
        ...paramConfigs,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: unknown) => {
        throw err;
      });
  },

  /**
   * @function upload To upload a file
   * @param {string} url API path
   * @param {FormData} formData Form data to upload
   * @param {AxiosRequestConfig} paramConfigs Axios request configuration
   * @param {AxiosInstanceType} axiosInstanceType Type of Axios instance to use
   * @returns {Promise<AxiosResponse>} Axios response
   */
  upload: async (
    url: string,
    formData: FormData,
    paramConfigs: AxiosRequestConfig = {},
    axiosInstanceType: AxiosInstanceType
  ): Promise<AxiosResponse> => {
    const instance = fetchAxiosInstanceType(axiosInstanceType);
    return instance
      .request({
        url,
        method: "PUT",
        data: formData,
        ...paramConfigs,
      })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: unknown) => {
        throw err;
      });
  },
};

export default fetcher;
