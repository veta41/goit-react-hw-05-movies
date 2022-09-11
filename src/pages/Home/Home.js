import { Header } from 'components/Header/Header';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../../servises/Api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <Header text="TRENDING TODAY" />
      <MoviesList moviesList={movies} />
    </>
  );
}
