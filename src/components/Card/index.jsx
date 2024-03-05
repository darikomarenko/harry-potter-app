import { useDispatch } from 'react-redux';
import { toggleLike, removeCard } from '../../store/actions';

function Card({ ...card }) {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(toggleLike(card.id));
  };

  const handleRemoveClick = () => {
    dispatch(removeCard(card.id));
  };

  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.name} />
      <h3>{card.name}</h3>
      <button onClick={handleLikeClick}>{card.hasLike ? <p>Like</p> : <p>No like</p>}</button>
      <button onClick={handleRemoveClick} className="delete-btn">
        Удалить
      </button>
    </div>
  );
}

export default Card;
