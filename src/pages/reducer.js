import React, { createContext, useReducer } from 'react';

const CountContext = createContext()

function init(initialCount) {
    return {count: 0};
  }
  
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      case 'reset':
        return init(action.payload);
      default:
        throw new Error();
    }
  }
  
  function Counter({initialCount}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    console.log(state);
    
    return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export {
    Counter,
    CountContext
}
