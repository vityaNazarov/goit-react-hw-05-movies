import { ThreeDots } from 'react-loader-spinner';

import css from './loader.module.css';

export const Loader = () => {
  return (
    <div className={css.overlay}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="gray"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
