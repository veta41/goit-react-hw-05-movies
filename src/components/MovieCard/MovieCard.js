import {
  Card,
  Desc,
  Img,
  MovieDetail,
  MovieH2,
  MovieH3,
} from './MovieCard.styled';
import { PropTypes } from 'prop-types';

export const MovieCard = ({ movie }) => {
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  return (
    <Card>
      <div>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://i.gifer.com/5h4.gif`
          }
          alt={title ? title : name}
        />
      </div>
      <Desc>
        <MovieH2>
          {title ? title : name} ({release_date.slice(0, 4)})
        </MovieH2>
        <MovieDetail>
          Use Score: {Math.round((vote_average / 10) * 100)}%
        </MovieDetail>
        <MovieH3>Overwiew</MovieH3>
        <MovieDetail>{overview}</MovieDetail>
        <MovieH3>Genres</MovieH3>
        <MovieDetail>{genres.map(item => item.name).join(' ,')}</MovieDetail>
      </Desc>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
};
