import axios from 'axios'

const SERVER_URL = process.env.SERVER_URL || 'http://172.17.0.200:9000';

const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000
});

export default {
 
}
