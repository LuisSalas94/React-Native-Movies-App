import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '584c0f39846969ff6bd496c450751957',
    language: 'es-ES',
  },
});

export default movieDB;
