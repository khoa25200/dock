import axios from 'axios';
const url_api = `${import.meta.env.VITE_BACKEND_BASE_URL}/api` || 'http://47.129.183.26:8080/api';

const api = axios.create({
  baseURL: url_api,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('Unauthorized! Redirect to login');
    }
    return Promise.reject(error);
  }
);

export default api;
