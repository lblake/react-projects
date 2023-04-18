import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c3e25bc6ec9245cb9423b4aac7b5eeaa',
  },
});
