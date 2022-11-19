import type { AxiosResponse, AxiosError } from 'axios';
import axios from 'axios';
import type { ErrorResponseData, RefinedResponse, RefinedError } from '~/types/apis';
import { isManuallyRaisedExceptionData } from '~/utils/type-guard';

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

    const refinedError: RefinedError = {
      status: error.request.status,
      code: error.code || 'ERR_UNKNOWN',
      title: error.name,
      message: error.message,
    };

    if (error.response && error.response !== error.request) {
      refinedError.title = error.response.statusText;

      const errorResponseData = error.response.data;

      if (isManuallyRaisedExceptionData(errorResponseData)) {
        refinedError.code = errorResponseData.code;
        refinedError.title = errorResponseData.title;
        refinedError.message = errorResponseData.message;
      }
    }

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

export const typedDelete = async (...params: Parameters<typeof axios.delete>) => {
  const typedResult = await instance.delete(...params) as RefinedResponse<''> | RefinedError;

  return Promise.resolve(typedResult);
};
