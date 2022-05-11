import axios, { AxiosRequestConfig, AxiosError } from "axios";
import env from "../../env";
import auth from "../auth.service";

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

const axiosInstance = axios.create({
  baseURL: env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(requestHandler, responseErrorHandler);

export default axiosInstance;
