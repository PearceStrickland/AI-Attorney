import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import IntroScreen from './IntroScreen';
import Judge1 from './Judge1';
import Judge2 from './Judge2';
import Judge3 from './Judge3';
import MainChar1 from './MainChar1';
import MainChar2 from './MainChar2';
import MainChar3 from './MainChar3';
import Witness1 from './Witness1';
import Witness2 from './Witness2';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/game" element={<GameScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/intro" element={<IntroScreen />} />
          <Route path="/judge1" element={<Judge1 />} />
          <Route path="/judge2" element={<Judge2 />} />
          <Route path="/judge3" element={<Judge3 />} />
          <Route path="/main1" element={<MainChar1 />} />
          <Route path="/main2" element={<MainChar2 />} />
          <Route path="/main3" element={<MainChar3 />} />
          <Route path="/witness1" element={<Witness1 />} />
          <Route path="/witness2" element={<Witness2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;