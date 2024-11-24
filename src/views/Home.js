import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {

  return (
    <div>
      <p>Vous avez cliqué {counter} fois</p>
      <button onClick={onIncrement}>
        + 
      </button>
      <button onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Home;
