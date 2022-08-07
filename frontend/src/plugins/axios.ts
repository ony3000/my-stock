import axios, { AxiosResponse, AxiosError } from 'axios';
import { ErrorResponseData, ErrorInformation } from '../types/apis';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
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
    const refinedError = error.response ? {
      status: error.response.status,
      message: (
        typeof error.response.data !== 'string'
          ? error.response.data.detail
          : error.response.statusText
      ),
    } : {
      status: errorInfo.status,
      message: errorInfo.message,
    };

    return refinedError;
  },
);

export default instance;
