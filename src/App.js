import React from 'react';
import './App.css';
import Tickers from './components/Tickers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Crytocurrency Ticker</h2>
      </header>
      <Tickers />
    </div>
  );
}

export default App;
