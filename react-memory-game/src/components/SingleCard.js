import React from 'react';
import './SingleCard.css';

function SingleCard({ card, handleChoice, flipped }) {
  const handleCardClick = () => {
    handleChoice(card);
  };

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src='/img/cover.png'
          onClick={handleCardClick}
          alt='card back'
        />
      </div>
    </div>
  );
}

export default SingleCard;
