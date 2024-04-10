import React from 'react';
import newScene from '../hooks/newScene.js';
import Typewriter from './typewriter.js';
import attorneyImage from '../images/Attorney.png';

const AttorneyScene = ({ entries, author, onSceneComplete }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = newScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${attorneyImage})` }}>
            <img src={currentPose} alt="Pose" className="character-image attorney-image" />
            <Typewriter 
                text={currentText} 
                speaker={author} 
                onComplete={() => setTypingComplete(true)}
            />
        </div>
    );
};

export default AttorneyScene;
