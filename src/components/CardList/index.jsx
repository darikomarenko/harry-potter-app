import { useSelector } from 'react-redux';
import Card from '../Card/index';
import styles from './style.module.scss';

function CardList() {
  const cards = useSelector((state) => {
    if (state.filter === 'hasLike') {
      return state.cards.filter((card) => card.isLiked);
    } else {
      return state.cards;
    }
  });
  console.log(cards);
  return (
    <div className={styles['card-list']}>
      {cards.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  );
}

export default CardList;
