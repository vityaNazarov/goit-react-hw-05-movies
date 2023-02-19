import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import css from './movie-details-list.module.css';

const MovieDetailsList = ({ movie }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  return (
    <div>
      <div className={css.buttonBack}>
        <button className={css.btnBack} onClick={goBack} type="submit">
          <IconContext.Provider
            value={{
              color: 'black',
              size: 12,
            }}
          >
            <BsArrowLeft />
          </IconContext.Provider>
          Go back
        </button>
      </div>

      <div className={css.wrapperDetailsList}>
        <div>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            width={200}
          />
        </div>

        <div className={css.description}>
          <h2>
            {movie?.original_title} (
            {new Date(movie.release_date).getFullYear()})
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movie?.overview}</p>
          <h3>Genres</h3>
          <p>{movie?.genres?.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <div className={css.additional}>
        <h2 className={css.text}>Additional information</h2>
        <ul className={css.list}>
          <Link to="cast" state={{ from }}>
            <li className={css.infoAddit}>Cast</li>
          </Link>
          <Link to="reviews" state={{ from }}>
            <li className={css.infoAddit}>Reviews</li>
          </Link>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

MovieDetailsList.defaultProps = {
  movie: [],
};

export default MovieDetailsList;
