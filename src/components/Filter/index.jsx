import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions';
import styles from './style.module.scss';

function Filter() {
  const dispatch = useDispatch();
  const [hasLike, setHasLike] = useState(false);

  const handleFilterButtonClick = () => {
    setHasLike(!hasLike);
    dispatch(setFilter(hasLike ? 'all' : 'hasLike'));
  };

  return (
    <button className={styles['filter-button']} onClick={handleFilterButtonClick}>
      {hasLike ? 'All' : 'Liked'}
    </button>
  );
}

export default Filter;
