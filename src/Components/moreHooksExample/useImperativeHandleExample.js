import React, { useImperativeHandle } from "react";

// useImperativeHandle customizes the instance value that 
// is exposed to parent components when using ref. Imperative code 
// must be avoided in all cases. Hence, useImperativeHandle should always
// use forwardRef.

// syntax: useImperative(ref, createHandle, [inputs])

const RenderChildInput = (props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => { inputRef.current.focus(); }
  }), []);

  return (
    <div>
      <ChildInput ref={inputRef} { ...props } />
    </div>
  );
}

RenderChildInput = React.forwardRef(RenderChildInput);
