import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastGallery } from './Cast.styled';
import { CastCard } from './CastCard';
import * as movieAPI from '../../servises/Api';

export default function Cast() {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      if (movieId) {
        try {
          const { cast } = await movieAPI.getMovieIdCredits(movieId);
          setCasts(cast);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [movieId]);

  return (
    <>
      {casts && casts.length ? (
        <CastGallery>
          {casts.map(item => {
            return (
              <li key={item.id}>
                <CastCard cast={item}></CastCard>
              </li>
            );
          })}
        </CastGallery>
      ) : (
        <p>No data</p>
      )}
    </>
  );
}
