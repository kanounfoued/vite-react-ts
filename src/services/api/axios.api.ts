import axios, { AxiosRequestConfig, AxiosError } from "axios";
import auth from "../auth.service";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
});

function requestHandler(
  request: AxiosRequestConfig
): Promise<AxiosRequestConfig> {
  function successCallback() {
    return Promise.resolve({
      ...request,
      headers: {
        ...request?.headers,
        Authorization: `Bearer ${auth.getToken()}`,
      },
    });
  }

  return auth.updateToken<AxiosRequestConfig>({
    successCallback,
  }) as Promise<AxiosRequestConfig>;
}

function responseErrorHandler(error: AxiosError) {
  return Promise.reject(error);
}

axiosInstance.interceptors.request.use(requestHandler, responseErrorHandler);

export default axiosInstance;
