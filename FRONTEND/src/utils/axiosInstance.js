// axops kka instace banao

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000' // Set the base URL for your API
});             


export default axiosInstance;