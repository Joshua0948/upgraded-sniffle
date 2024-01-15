import axios from 'axios';

const API_KEY = '1abb3e68d878be1155d781ce812f80a8';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
};

export const getTopRatedMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
};

export const getUpcomingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
};

export const getNowPlayingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/movie/now_playing`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
};