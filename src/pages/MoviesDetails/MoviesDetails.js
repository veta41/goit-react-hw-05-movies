import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { Header } from '../../components/Header/Header';

import { getMovieDetails } from '../../servises/Api';
// import {
//   MovieCard,
//   MovieInfo,
//   MovieLink,
//   MovieH2,
//   MovieH3,
// } from '../MoviesDetails/MoviesDetails.styled';
// import { NotFoundPage } from '../NotFoundPage';
import BackButton from 'components/BackButton/BackButton';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <BackButton />
      {movie && <MovieCard movie={movie} />}
      <hr />
      <ul>
        <li>
          <Link state={location.state} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={location.state} to="reviews">
            Review
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
