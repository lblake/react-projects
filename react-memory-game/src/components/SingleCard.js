import React from 'react';
import './SingleCard.css';

function SingleCard({ card, handleChoice }) {
  const handleClick = (card) => {
    handleChoice(card);
    console.log('card clicked', card);
  };

  return (
    <div className='card'>
      <div>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src='/img/cover.png'
          onClick={handleClick}
          alt='card back'
        />
      </div>
    </div>
  );
}

export default SingleCard;
