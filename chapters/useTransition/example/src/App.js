import { useState, useTransition } from 'react';

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleChangeWithTransition = (e) => {
    const value = e.target.value;
    setInput(value);
    startTransition( () => {
      // simulate a slow rendering process
      const arrayOfData = [];
      for (let i=0; i<20000; i++){
        arrayOfData.push(value);
      }
      setOutput(arrayOfData);
    });
  };

  const handleChangeWithoutTransition = (e) => {
    const value = e.target.value;
    setInput(value);
    
    const arrayOfData = [];
    for (let i=0; i<20000; i++){
      arrayOfData.push(value);
    }
    setOutput(arrayOfData);
  };

  return (
    <>
      <input value={input} onChange={handleChangeWithTransition} />
      {isPending ? 
        <p>'Loading...'</p> 
      : 
        <p>{output.map(o => <span>{o} </span>)}</p>}
    </>
  );
}