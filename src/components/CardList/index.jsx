import { useSelector } from 'react-redux';
import Card from '../Card/index';

function CardList() {
  const cards = useSelector((state) => {
    if (state.filter === 'hasLike') {
      return state.cards.filter((card) => card.isLiked);
    } else {
      return state.cards;
    }
  });

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
