import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getKeywordMovies } from 'services/api/posts';
import { toast } from 'react-toastify';

import SearchFormMovies from 'components/SearchFormMovies/SearchFormMovies';
import SearchMoviesList from 'components/SearchMovies/SearchMoviesList';
import { Loader } from '../../components/Loader/Loader';
import css from './movies-page.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchSearchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getKeywordMovies(search);
        if (!results.length) {
          setLoading(false);
          toast.error(
            `Sorry, there are no movies matching your search. Please try again.`,
            {
              position: toast.POSITION.TOP_RIGHT,
              theme: 'colored',
            }
          );
        }
        setMovies(results);
      } catch (error) {
        setError(error.messege);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchMovies();
  }, [search, setLoading, setMovies, setError]);

  const changeSearch = query => {
    if (query === '') return;
    setSearchParams({ query });
    setMovies([]);
  };

  return (
    <div className={css.container}>
      <SearchFormMovies onSubmit={changeSearch} />
      {movies.length !== 0 && <SearchMoviesList movies={movies} />}
      {loading && <Loader />}
      {error && <p>...Posts load failed</p>}
    </div>
  );
};

export default MoviesPage;
