import client from './api';

type Params = {
  prompt: string;
  n: number;
  size: '256x256' | '512x512' | '1024x1024';
};

const apiURL = import.meta.env.VITE_OPEN_AI_URL;

const getImage = async (params: Params) => {
  return await client.post(apiURL, params);
};

export default getImage;
