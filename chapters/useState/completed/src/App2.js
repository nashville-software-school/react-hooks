import './App.css';

import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted! Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.nam}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.nam}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
