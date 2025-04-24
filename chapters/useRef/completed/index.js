import React, { useRef, useEffect } from 'react';

function UseRefExample() {
  // 1. Maintaining state without re-renders (timer example)
  const intervalId = useRef(null);
  const timerCount = useRef(0);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      timerCount.current += 1;
      console.log('Timer count:', timerCount.current);
      // This won't cause a re-render, but you can still access the updated value
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  // 2. Referencing and manipulating a DOM element (input focus)
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <h3>useRef Example</h3>
      {/* Displaying the timer count - purely for demonstration */}
      <p>Timer count (no re-render): {timerCount.current}</p>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefExample;