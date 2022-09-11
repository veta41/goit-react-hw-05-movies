import { Link, useLocation } from 'react-router-dom';
import { Card, List, Title } from './MoviesList.styled';
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
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
                    }
                    alt={title ? title : name}
                    width="300"
                    height="450"
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
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
