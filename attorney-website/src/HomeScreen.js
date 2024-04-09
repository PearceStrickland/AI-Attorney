import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeScreen.css';

function HomeScreen() {
  let navigate = useNavigate(); // Hook to get the navigate function

  function handleProceed() {
    navigate('/game'); // Use navigate function to change the route
  }

  return (
    <div className="app">
      <div className="background-image"></div>
      <div className="content">
        <h1>AI Attorney</h1>
        <ul>
          <li>Instruction 1: Read the case carefully and gather all relevant information.</li>
          <li>Instruction 2: Analyze the evidence and identify key points to support your argument.</li>
          <li>Instruction 3: Prepare your opening statement and anticipate counterarguments.</li>
          <li>Instruction 4: Cross-examine witnesses and present your case persuasively.</li>
          <li>Instruction 5: Deliver a compelling closing argument to sway the jury.</li>
        </ul>
        <button className="proceed-button" onClick={handleProceed}>Proceed to the Game</button>
      </div>
    </div>
  );
}

export default HomeScreen;