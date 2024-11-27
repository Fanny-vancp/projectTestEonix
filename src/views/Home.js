import React from 'react';
import './Home.style.css';
import Counter from '../containers/CounterContainer';

function Home({
  counter,
}) {

  return (
    <div className='homeContainer'>
      <p>Vous avez cliqué {counter} fois</p>
      <Counter />
    </div>
  );
};

export default Home;
