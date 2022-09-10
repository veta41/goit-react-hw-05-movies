import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../servises/Api';
import {
  ReviewsGallery,
  ReviewsCard,
  ReviewsTitle,
  ReviewsDescription,
} from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    (async () => {
      if (movieId) {
        try {
          const { results } = await movieAPI.getMovieIdReviews(movieId);
          setReviews(results);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [movieId]);

  return (
    <>
      <ReviewsGallery>
        {reviews && reviews.length ? (
          reviews.map(({ id, author, content }) => {
            return (
              <ReviewsCard key={id}>
                <ReviewsTitle>{author}</ReviewsTitle>
                <ReviewsDescription>{content}</ReviewsDescription>
              </ReviewsCard>
            );
          })
        ) : (
          <ReviewsTitle>We don`t have any rewiews for this movie.</ReviewsTitle>
        )}
      </ReviewsGallery>
    </>
  );
};
Reviews.propTypes = {
  results: PropTypes.array,
};
