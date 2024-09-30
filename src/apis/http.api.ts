import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from 'apis/ApiError';
import { readToken } from 'services/localStorage.service';

export const httpApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// Request Interceptor
const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  // Set Headers Here
  // Check Authentication Here
  // Set Loading Start Here
  const token = readToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  // console.log('🚀 [API] CONFIG: ', config);

  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // const { method, url } = response.config;
  // const { status } = response;
  // Set Loading End Here
  // Handle Response Data Here
  // Error Handling When Return Success with Error Code Here
  // logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);

  return response;
};

const onErrorResponse = (error: AxiosError | Error) => {
  if (axios.isAxiosError(error)) {
    const { response } = error;
    const {
      // statusText,
      status,
      data,
    } = response ?? {};
    if (data && typeof data.message === 'string') {
      throw new ApiError<ApiErrorData>(data.message);
    }
    throw new ApiError<ApiErrorData>(data);
  } else {
    throw new ApiError<ApiErrorData>(error.message);
  }
};

httpApi.interceptors.request.use(onRequest, onErrorResponse);

httpApi.interceptors.response.use(onResponse, onErrorResponse);

export interface ApiErrorData {
  message: string;
}
