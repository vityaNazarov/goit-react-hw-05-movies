import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getInfoActors } from 'services/api/posts';
import { Loader } from '../../components/Loader/Loader';
import css from './cast-page.module.css';

const CastPage = () => {
  const [infoActors, setInfoActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchInfoActors = async () => {
      try {
        setLoading(true);
        const res = await getInfoActors(id);
        setInfoActors(res.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInfoActors();
  }, [id, setLoading, setError]);

  const elements = infoActors.map(
    ({ id, profile_path, original_name, name, character }) => (
      <li key={id} className={css.descriptionCast}>
        <img
          src={'https://image.tmdb.org/t/p/w300' + profile_path}
          alt={original_name}
          width={150}
        />
        <div>
          <p>{name}</p>
          <p>Character: {character}</p>
        </div>
      </li>
    )
  );

  return (
    <div>
      <ul>{elements}</ul>
      {loading && <Loader />}
      {error && <p>...Posts load failed</p>}
    </div>
  );
};

export default CastPage;
