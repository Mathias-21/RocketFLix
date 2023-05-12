import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const imgUrl = 'https://image.tmdb.org/t/p/';
const apiKey = '8c0d64daffb2cb089678fe9850640f4e';

const api = axios.create({
  baseURL: baseUrl,
  params: { api_key: apiKey },
});

export { api, baseUrl, imgUrl };
