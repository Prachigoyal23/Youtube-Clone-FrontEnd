// src/api/axiosInstance.js
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token){ 
    req.headers.Authorization = `JWT ${token}`
};
  return req;
});

export default AxiosInstance;
