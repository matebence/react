import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  validateStatus: function (status) {
    return status >= 200 && status < 300;
  }
});

export default instance;