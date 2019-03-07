import React, { useReducer } from "react";

// useReducer is usually preferable to useState when you have
// complex state logic that involves multiple sub-values or
// when the next state depends on the previous one. useReducer
// also lets you optimize performance for components that trigger
// deep updates because you can pass dispatch down instead of callbacks.
// useReducer is an alternate to useState when using Redux store and
// needs to get the hold on dispatch method to dispatch action
// in the application

// syntax: useReducer(reducer, initialArg, init);

const init = initialCount => ({ count: initialCount });

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

const Counter = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
