import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainChar3.css'; // Make sure to import the CSS file
import courtroomImage from './images/empty_courtroom.png';

function MainChar3() {
  const navigate = useNavigate();

  const goToNextScreen = () => {
    navigate('/intro'); // Update this with the actual route you want to use
  };

  return (
    <div className="game-screen">
      <img src={courtroomImage} alt="Courtroom Scene" className="game-image" />
      <div className="game-text">Testing testing</div>
      <button className="next-button" onClick={goToNextScreen}>Next</button>
    </div>
  );
}

export default MainChar3;
