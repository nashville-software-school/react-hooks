import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [name, setName] = useState("");
  // TODO: Create refs for:
  // (1) Storing previous name value
  // (2) Accessing input element
  // (3) Storing input dimensions

  // TODO: (1) Add useEffect to update previous name when name changes

  // TODO: (3) Add useEffect to measure input dimensions on mount

  // TODO: (2) Create function to focus input element

  return (
    <div className="App">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        // TODO: (2,3) Add ref attribute to input
      />
      {/* TODO: (2) Add button to focus input */}
      <div>
        Current Value:
        <br />
        <b>{name}</b>
      </div>
      {/* TODO: (1) Add div to display previous value */}
      {/* TODO: (3) Add div to display input dimensions */}
    </div>
  );
}

export default App;
