import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';

import './App.css';

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log('cards match');
        resetTurn();
      } else {
        console.log('cards do not match');
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(-0.5) }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceOne(card) : setChoiceTwo(card);
  };

  

  console.log(cards, turns)
  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };
  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
