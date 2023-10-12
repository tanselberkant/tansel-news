import axios from 'axios';
import API_TOKEN from '../config';

export default axios.create({
  headers: {
    'Content-type': 'application/json',
    authorization: API_TOKEN,
  },
  baseURL: 'https://api.collectapi.com',
  withCredentials: false,
});
