import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions';
import styles from './style.module.scss';

function Filter() {
  const dispatch = useDispatch();
  const [hasLike, setHasLike] = useState(false);

  const handleFilterButtonClick = () => {
    setHasLike(!hasLike);
    dispatch(setFilter(hasLike ? 'all' : 'liked'));
  };

  return (
    <div className={styles['filter']}>
      <button onClick={handleFilterButtonClick}>{hasLike ? 'All' : 'Liked'}</button>
    </div>
  );
}

export default Filter;
