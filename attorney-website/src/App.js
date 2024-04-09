import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import IntroScreen from './IntroScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/game" element={<GameScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/intro" element={<IntroScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;