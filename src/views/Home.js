import React from 'react';

function Home({
  onIncrement,
  counter,
  onDecrement,
}) {

  return (
    <div>
      Vous avez cliqué {counter} fois
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
