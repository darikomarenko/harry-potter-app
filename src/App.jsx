import Filter from '../src/components/Filter';
import CardList from '../src/components/CardList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://potterapi-fedeperin.vercel.app/es/characters')
      .then((data) => {
        const cards = data.cards.map((card) => ({
          id: card.id,
          name: card.name,
          nickname: card.nickname,
          image: card.image,
          house: card.hogwartsHouse,
          hasLike: false,
        }));
        cards.forEach((card) => dispatch(addCard(card)));
        loading(false);
      })
      .catch((error) => {
        console.error(error);
        loading(false);
      });
  }, [dispatch]);

  return (
    <>
      <header>
        <h1>Harry Potter Cards</h1>
        <Filter />
      </header>
      <div>{loading ? <p>Loading...</p> : <CardList />}</div>
    </>
  );
}

export default App;
