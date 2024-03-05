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
      .then((response) => response.json())
      .then((data) => {
        const cards = data.map((card) => ({
          name: card.fullName,
          nickname: card.nickname,
          image: card.image,
          house: card.hogwartsHouse,
          hasLike: false,
        }));
        console.log(cards);
        cards.forEach((card) => dispatch(addCard(card)));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      <header>
        <h1>Harry Potter Characters</h1>
        <Filter />
      </header>
      <div>{loading ? <p>Loading...</p> : <CardList />}</div>
    </>
  );
}

export default App;
