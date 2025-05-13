import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let data = [];
for (let i=0; i<100000; i++){
  data.push("item "+i);
}

root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);