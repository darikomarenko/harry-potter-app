import { useSelector } from 'react-redux';
import Card from '../Card/index';
import styles from './style.module.scss';

function CardList() {
  const cards = useSelector((state) => {
    if (state.filter === 'hasLike') {
      return state.cards.filter((card) => card.hasLike);
    } else {
      return state.cards;
    }
  });
  return (
    <div className={styles['card__list']}>
      {cards.map((card) => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  );
}

export default CardList;
