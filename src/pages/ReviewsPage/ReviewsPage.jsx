import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewMovies } from 'services/api/posts';
import { Loader } from '../../components/Loader/Loader';
import css from './reviews-page.module.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviewMovies = async () => {
      try {
        setLoading(true);
        const res = await getReviewMovies(id);
        setReviews(res.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewMovies();
  }, [id, setLoading, setError]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <div>
        <p>Author: {author}</p>
        <p>{content}</p>
      </div>
    </li>
  ));

  return (
    <div className={css.container}>
      <ul>{elements}</ul>
      {loading && <Loader />}
      {error && <p>...Posts load failed</p>}
      {!reviews.length && <p>We don't have any reviews for this movie</p>}
    </div>
  );
};

export default ReviewsPage;
