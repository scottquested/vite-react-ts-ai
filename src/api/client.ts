import axios from 'axios';

const client = (apiKey: string) => {
  return axios.create({
    headers: {
      Authorization: 'Bearer ' + apiKey
    }
  });
};

export default client;
