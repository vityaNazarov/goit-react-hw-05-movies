import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './movies-search.module.css';

const SearchMoviesList = ({ movies }) => {
  const location = useLocation();

  const elements = movies.map(({ id, title }) => (
    <li key={id}>
      <Link
        className={css.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

SearchMoviesList.defaultProps = {
  movies: [],
};

SearchMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default SearchMoviesList;
