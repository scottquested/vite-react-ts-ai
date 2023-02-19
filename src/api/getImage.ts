import client from './client';

type Params = {
  prompt: string;
  n: number;
  size: '256x256' | '512x512' | '1024x1024';
};

const apiURL = 'https://api.openai.com/v1/images/generations';

const getImage = async (params: Params, apiKey: string) => {
  return await client(apiKey).post(apiURL, params);
};

export default getImage;
