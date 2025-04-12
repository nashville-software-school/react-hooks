import React from 'react';
import './App.css';

function App() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted! Name: ---, Email: ---, Password: ---`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
