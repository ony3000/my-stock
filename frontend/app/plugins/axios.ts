import type { AxiosResponse, AxiosError } from 'axios';
import axios from 'axios';
import type {
  ErrorResponseData, ErrorInformation, RefinedResponse, RefinedError,
} from '~/types/apis';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  headers: {
    Accept: 'application/json',
  },
});

instance.interceptors.response.use(
  (response: AxiosResponse<unknown>) => ({
    status: response.status,
    data: response.data,
  }),
  (error: AxiosError<ErrorResponseData>) => {
    // eslint-disable-next-line no-console
    console.error(error);

    const errorInfo = error.toJSON() as ErrorInformation;
    const refinedError: RefinedError = error.response ? {
      status: error.response.status,
      code: error.code || 'ERR_UNKNOWN',
      title: error.response.statusText || error.name,
      message: error.message,
      ...(typeof error.response.data === 'object' ? error.response.data : {}),
    } : {
      status: Number(errorInfo.status),
      code: errorInfo.code,
      title: errorInfo.name,
      message: errorInfo.message,
    };

    return refinedError;
  },
);

export const typedGet = async <T = unknown>(...params: Parameters<typeof axios.get>) => {
  const typedResult = await instance.get<T>(...params) as RefinedResponse<T> | RefinedError;

  return Promise.resolve(typedResult);
};

export const typedPost = async <T = unknown>(...params: Parameters<typeof axios.post>) => {
  const typedResult = await instance.post<T>(...params) as RefinedResponse<T> | RefinedError;

  return Promise.resolve(typedResult);
};

export const typedPut = async <T = unknown>(...params: Parameters<typeof axios.put>) => {
  const typedResult = await instance.put<T>(...params) as RefinedResponse<T> | RefinedError;

  return Promise.resolve(typedResult);
};

export const typedPatch = async <T = unknown>(...params: Parameters<typeof axios.patch>) => {
  const typedResult = await instance.patch<T>(...params) as RefinedResponse<T> | RefinedError;

  return Promise.resolve(typedResult);
};

export const typedDelete = async <T = unknown>(...params: Parameters<typeof axios.delete>) => {
  const typedResult = await instance.delete<T>(...params) as RefinedResponse<T> | RefinedError;

  return Promise.resolve(typedResult);
};
