import React, { useRef } from 'react'

// useRef returns a mutable ref object whose .current property
// is initialized to the passed argument. And the returned 
// objects gets persisted throughout the lifetime of the component.
// useRef are more useable than traditional ref in react since they can be mutated
// and persist throught the lifecycle

// syntax: const refContainer = useRef(initialValue)

const App = props => {
    const [name, setName] = useState("Nate");
  
    const nameRef = useRef();
  
    const submitButton = () => {
      setName(nameRef.current.value);
    };
  
    return (
      <div className="App">
        <p>{name}</p>
  
        <div>
          <input ref={nameRef} type="text" />
          <button type="button" onClick={submitButton}>
            Submit
          </button>
        </div>
      </div>
    );
}