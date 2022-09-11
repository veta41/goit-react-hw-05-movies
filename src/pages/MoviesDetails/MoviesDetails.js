import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { Header } from '../../components/Header/Header';

import { getMovieDetails } from '../../servises/Api';

import BackButton from 'components/BackButton/BackButton';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Header } from 'components/Header/Header';
import {
  MovieItemDetails,
  MovieLink,
  MovieListDetails,
} from './MoviesDetails.styled';

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

      <MovieListDetails>
        <Header text="Additional information" />
        <MovieItemDetails>
          <li>
            <MovieLink state={location.state} to="cast">
              Cast
            </MovieLink>
          </li>
          <li>
            <MovieLink state={location.state} to="reviews">
              Review
            </MovieLink>
          </li>
        </MovieItemDetails>
      </MovieListDetails>
      <Outlet />
    </>
  );
}
