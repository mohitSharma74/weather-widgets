import React, { useContext } from 'react'

// Accepts a context object (the value returned from React.createContext) 
// and returns the current context value, as given by the nearest context 
// provider for the given context. Whenever provider updates the value, this
// hook will trigger a re-render with the latest context value.

// syntax: useContext(Context)

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

const App = () => {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={42}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

// Tradition Consumer functional Component 
const Display1 = () => {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}

// Consumer Component with useContext hook
const Display = () => {
    const value = useContext(NumberContext);
    return <div>The answer is {value}.</div>;
}

// Render the DOM with App Component