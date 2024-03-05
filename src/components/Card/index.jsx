import { useDispatch } from 'react-redux';
import { toggleLike, removeCard } from '../../store/actions';
import styles from './style.module.scss';
import { AiFillThunderbolt } from 'react-icons/ai';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

function Card({ ...card }) {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(toggleLike(card.card.name));
  };

  const handleRemoveClick = () => {
    dispatch(removeCard(card.card.name));
  };
  console.log(card);
  return (
    <div className={styles['card']}>
      <img src={card.card.image} alt={card.card.name} className={styles['card__image']} />
      <h3 className={styles['card__name']}>{card.card.name}</h3>
      <div className={styles['card__buttons']}>
        <button onClick={handleLikeClick}>
          {card.card.hasLike ? <AiFillThunderbolt /> : <AiOutlineThunderbolt />}
        </button>
        <button onClick={handleRemoveClick} className={styles['delete-btn']}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Card;
