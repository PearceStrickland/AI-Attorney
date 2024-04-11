import React from 'react';
import useScene from '../hooks/useScene.js';
import Typewriter from './typewriter.js';
import witnessImage from '../images/Witness.png';

const WitnessScene = ({ entries, author, onSceneComplete }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = useScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${witnessImage})` }}>
            <img src={currentPose} alt="Pose" className="character-image witness-image" />
            <Typewriter
                text={currentText} 
                speaker={author} 
                onComplete={() => setTypingComplete(true)}
            />
        </div>
    );
};

export default WitnessScene;
