import React, { useState, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "subtract":
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
}

function Counter() {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  // function incrementCounter() {
  //   const updatedCounter = counter + 1;
  //   setCounter(updatedCounter);
  // }

  // function decrementCounter() {
  //   const updatedCounter = counter - 1;
  //   setCounter(updatedCounter);
  // }

  return (
    <div>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <p>counter:{state.count}</p>
      <button onClick={() => dispatch({ type: "subtract" })}>-</button>
    </div>
  );
}

export default Counter;
