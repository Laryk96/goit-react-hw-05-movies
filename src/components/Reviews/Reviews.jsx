import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/moviesAPI';
import {
  AuthorName,
  Content,
  ReviewsItem,
  ReviewsList,
  Title,
} from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('loading');
    getMovieReviews(id)
      .then(response => {
        setReviews(response.data.results);
        if (response.data.results) {
          return setStatus('notFound');
        } else {
          return setStatus('fulfilled');
        }
      })
      .catch(console.log)
      .finally(() => {});
  }, [id]);

  if (reviews.length !== 0) {
    return (
      <ReviewsList>
        {reviews.map(({ author, content }, index) => (
          <ReviewsItem key={index}>
            <AuthorName>Author: {author}</AuthorName>
            <Content>{content}</Content>
          </ReviewsItem>
        ))}
      </ReviewsList>
    );
  }

  if (status === 'notFound') {
    return <Title>we don't have any reviews for this movie</Title>;
  }

  if (status === 'loading') {
    return <Title>Loading...</Title>;
  }
};

export default Reviews;
