import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '4c3b5b4b95508940c904fdac3684637a';
const PARAM = {
  trending: 'trending/movie/week',
  search: 'search/movie',
  movieID: 'movie/',
  reviews: '/reviews',
  credits: '/credits',
};
const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `/${PARAM.trending}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
const getMovieDetails = async id => {
  const { data } = await axios.get(
    `/${PARAM.movieID}${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
const getMovieIdReviews = async id => {
  const { data } = await axios.get(
    `/${PARAM.movieID}${id}${PARAM.reviews}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
const getMovieIdCredits = async id => {
  const { data } = await axios.get(
    `/${PARAM.movieID}${id}${PARAM.credits}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
const getSearchMovies = async query => {
  const { data } = await axios.get(
    `/${PARAM.search}?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};
export {
  getTrendingMovies,
  getMovieDetails,
  getMovieIdReviews,
  getMovieIdCredits,
  getSearchMovies,
};
