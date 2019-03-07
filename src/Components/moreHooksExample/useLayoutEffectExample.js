import React, { useLayoutEffect } from "react";

// The implementation of useLayoutEffect is similar to useEffect,
// the only difference is that it fire all DOM mutations synchronously.
// Updates scheduled inside useLayoutEffect will be flushed synchronously,
// before the browser has a chance to paint.

export default function TheShape(props) {
  const [percentage, setPercentage] = useState(50);
  const [height, setHeight] = useState(null);
  useLayoutEffect(() => {
    setHeight(shapeRef.current.offsetHeight);
  }, [percentage]);
  const shapeRef = useRef(null);

  return (
    <>
      <main>
        <div ref={shapeRef} className="shape__main" style={props.style}>
          {height}
        </div>
      </main>
      <ShapeSizer handleChange={percentage => setPercentage(percentage)} />
    </>
  );
}
