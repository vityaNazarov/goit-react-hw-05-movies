import SearchMovies from 'components/SearchMovies/SearchMovies';
import css from './home-page.module.css';
const HomePage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.text}>Tranding today</h2>
      <SearchMovies />
    </div>
  );
};

export default HomePage;
