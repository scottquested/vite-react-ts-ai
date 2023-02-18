import axios from 'axios';

const apiKey = import.meta.env.VITE_OPEN_AI_KEY;

const client = axios.create({
  headers: {
    Authorization: 'Bearer ' + apiKey
  }
});

export default client;
