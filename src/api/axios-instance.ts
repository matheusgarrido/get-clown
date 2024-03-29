import Axios, { AxiosInstance } from 'axios';

const baseUrl = 'https://v2.jokeapi.dev/';

export const getAxiosInstance = (): AxiosInstance => {
  let axiosInstance = Axios.create({ baseURL: baseUrl });
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      if (status > 399) console.info(`API error (status ${status})`);
    }
  );
  return axiosInstance;
};
