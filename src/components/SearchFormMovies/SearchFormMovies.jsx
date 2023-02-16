import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import css from './search-form-movies.module.css';

const SearchFormMovies = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (search.trim() === '') {
      toast.info('Please enter a search request!', {
        position: toast.POSITION.TOP_LEFT,
        theme: 'colored',
      });
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
	<>
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        name="search"
        className={css.input}
        type="text"
        value={search}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
	</>
  );
};

SearchFormMovies.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchFormMovies;
