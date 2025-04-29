import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({ baseURL: baseURL || 'http://localhost:3001' });

export const askGPT = async (data: any) => {
  try {
    const response = await api.post('/askGPT', data);
    return response.data;
  } catch (error) {
    console.error('Error posting to GPT:', error);
    throw error;
  }
};
