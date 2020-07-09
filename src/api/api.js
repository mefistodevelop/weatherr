import axios from 'axios';
import { BASE_URL, API_KEY } from '../keys';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'API-KEY': API_KEY,
  },
});

export const api = {
  getWeather(city) {
    return instance
      .get(`weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => response.data);
  },
};
