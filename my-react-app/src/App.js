// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Position from './components/Position';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Position />
      <News />
    </div>
  );
}

export default App;
