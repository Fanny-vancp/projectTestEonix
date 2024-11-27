import React from 'react';
import './counter.style.css';

function Counter({ 
    counter, 
    onIncrement, 
    onDecrement
}) {
    return (
      <div className='counterContainer'>
        <button onClick={onIncrement}>
          + 
        </button>
        <p>{counter}</p>
        <button onClick={onDecrement}>
          -
        </button>   
      </div>
    );
}

export default Counter;