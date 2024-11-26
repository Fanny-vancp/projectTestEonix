import React from 'react';
import './Home.style.css';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {

  return (
    <div className='homeContainer'>
      <p>Vous avez cliqué {counter} fois</p>
      <div className='counterContainer'>
        <button onClick={onIncrement}>
            + 
        </button>
        <p>{counter}</p>
        <button onClick={onDecrement}>
          -
        </button>   
      </div>
    </div>
  );
};

export default Home;
