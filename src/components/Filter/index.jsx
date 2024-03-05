import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/actions';

function Filter() {
  const dispatch = useDispatch();
  const [hasLike, setHasLike] = useState(false);

  const handleFilterButtonClick = () => {
    setHasLike(!hasLike);
    dispatch(setFilter(hasLike ? 'all' : 'liked'));
  };

  return (
    <div className="filter">
      <button onClick={handleFilterButtonClick}>{hasLike ? 'All' : 'Liked'}</button>
    </div>
  );
}

export default Filter;
