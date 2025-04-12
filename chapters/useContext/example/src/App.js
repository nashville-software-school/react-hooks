import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [name, setName] = useState("");

  return (
    <div className="App">
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <div>Value:<br/><b>{name}</b></div>
    </div>
  );
}

export default App;
