import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GameScreen.css'; // Make sure to import the CSS file
import courtroomImage from './images/empty_courtroom.png';
import Typewriter from './typewriter';
import typewriterSound from './audio/typewriter-clack.wav';

function GameScreen() {
  const navigate = useNavigate();

  const goToNextScreen = () => {
    navigate('/intro'); // Update this with the actual route you want to use
  };

  return (
    <div className="game-screen">
      <img src={courtroomImage} alt="Courtroom Scene" className="game-image" />
      <Typewriter text="HI THERE MY NAME IS BILLY HELLO THERE@@@" audio={typewriterSound}/>
      <div className="game-text">This is an important piece of evidence. What will you do?</div>
      <button className="next-button" onClick={goToNextScreen}>Next</button>
    </div>
  );
}

export default GameScreen;
