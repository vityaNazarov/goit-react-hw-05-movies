import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieDetailsList from '../../components/MovieDetailsList/MovieDetailsList';
import { Loader } from '../../components/Loader/Loader';
import { getInfoMovie } from 'services/api/posts';

const MovieDetailsPage = () => {
  const [movie, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getInfoMovie(id);
        setMovies(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id, setLoading, setError]);

  return (
    <div>
      {loading && <Loader />}
      <MovieDetailsList movie={movie} />
      {error && <p>...Posts load failed</p>}
    </div>
  );
};

export default MovieDetailsPage;
