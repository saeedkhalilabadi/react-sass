import axios from 'axios';


const host = 'http://79.175.176.126/racinOAuth/api';


const instance = axios.create({
  baseURL: host,
  timeout: 20000,
  headers: {
    'content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
