import { Link, useLocation } from 'react-router-dom';
import { Card, Img, List, Title } from './MoviesList.styled';
import { PropTypes } from 'prop-types';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {moviesList.map(({ title, id, name, poster_path }) => {
          return (
            <Card>
              <li key={id}>
                <Link
                  to={`/goit-react-hw-05-movies/movies/${id}`}
                  state={{ from: location }}
                >
                  <Img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : `https://i.gifer.com/5h4.gif`
                    }
                    alt={title ? title : name}
                  />
                  <Title>{title ? title : name}</Title>
                </Link>
              </li>
            </Card>
          );
        })}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
