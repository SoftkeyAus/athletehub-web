import axios from 'axios';
import { APP_API_URL } from '../config/consts';

axios.defaults.baseURL = APP_API_URL;
// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('athletehub-token');

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    window.document.getElementById('loader').style.display = 'block';
    config.headers.Authorization = window.localStorage.getItem('athletehub-token');
    return config;
  },
  (error) => {
    // Do something with request error
    window.document.getElementById('loader').style.display = 'none';
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    window.document.getElementById('loader').style.display = 'none';
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    window.document.getElementById('loader').style.display = 'none';
    return Promise.reject(error);
  }
);
