import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    const updatedCounter = counter + 1;
    setCounter(updatedCounter);
  }

  function decrementCounter() {
    const updatedCounter = counter - 1;
    setCounter(updatedCounter);
  }

  return (
    <div>
      <button onClick={incrementCounter}>+</button>
      <p>{counter}</p>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
}

export default Counter;
