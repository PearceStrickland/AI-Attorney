import React from 'react';
import newScene from '../hooks/newScene';
import Typewriter from './typewriter.js';
import prosecutorImage from '../images/Prosecutor.png';

const ProsecutorScene = ({ entries, author, onSceneComplete }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = newScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${prosecutorImage})` }}>
            <img src={currentPose} alt="Pose" className="prosecutor-image" />
            <Typewriter 
                text={currentText} 
                speaker={author} 
                onComplete={() => setTypingComplete(true)}
            />
        </div>
    );
};

export default ProsecutorScene;
