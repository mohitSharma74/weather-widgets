import React, { useCallback } from 'react';

// useCallback returns a memoized function
// syntax: useCallback(() => fn, inputs)

const Foo = props =>  {
    const memoizedHandleClick = useCallback(
        () => console.log('Click happened'), [],
    ); // Tells React to memoize regardless of arguments.
    
    return <Button onClick={memoizedHandleClick}>Click Me</Button>;
}

// Conceptually, values passed in the array of inputs doesn't get passed
// as arguments, they are in a way is a fit to make variables available 
// in the function inside useCallback