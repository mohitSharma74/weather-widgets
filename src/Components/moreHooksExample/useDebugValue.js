import React, { useDebugValue } from 'react'

// useDebugValue can be used to display a label for custom hooks in React DevTools.
// Avoid using expensive computations inside useDebugValue.
// The most case would to be inpect custom hooks inisde shared library of components

// syntax: useDebugValue(value)

const useFriendStatus = friendID => {
    const [isOnline, setIsOnline] = useState(null);
  
    // ...
  
    // Show a label in DevTools next to this Hook
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');
  
    return isOnline;
}