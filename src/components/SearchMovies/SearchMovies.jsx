import { useState, useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { getMovies } from '../../services/api/posts';

import SearchMoviesList from 'components/SearchMovies/SearchMoviesList';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [setMovies, setLoading, setError]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>...Posts load failed</p>}
      {movies.length > 0 && <SearchMoviesList movies={movies} />}
    </div>
  );
};

export default SearchMovies;
