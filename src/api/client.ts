import axios from 'axios';

const client = (apiKey: string) => {
  console.log(apiKey);

  return axios.create({
    headers: {
      Authorization: 'Bearer ' + apiKey
    }
  });
};

export default client;
