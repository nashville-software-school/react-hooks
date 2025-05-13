import { useRef, useEffect } from 'react';

export default function App() {
  const intervalId = useRef(0);

  useEffect(() => {
    const startInterval = () => {
      intervalId.current = setInterval(() => {
        console.log('Interval running');
      }, 1000);
    };

    const stopInterval = () => {
      clearInterval(intervalId.current);
    };

    startInterval();

    return () => {
      stopInterval();
    };
  }, []);

  return (
    <h2>useRef Example</h2>
  );
}