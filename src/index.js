import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Personcontext from './components/contexts/PersonContext';
const persons = [
  { id: 0, name: 'Mark', age: 39 },
  { id: 0, name: 'Suzi', age: 19 },
];

ReactDOM.render(
  <React.StrictMode>
    <Personcontext.Provider value={persons}>
      <App />
    </Personcontext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
