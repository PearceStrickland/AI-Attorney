import React from 'react';
import newScene from '../hooks/newScene.js';
import Typewriter from './typewriter.js';
import collegeImage from '../images/College.png';

const CollegeScene = ({ entries, author, onSceneComplete }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = newScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${collegeImage})` }}>
            <img src={currentPose} alt="Pose" className="character-image college-image" />
            <Typewriter 
                text={currentText} 
                speaker={author} 
                onComplete={() => setTypingComplete(true)}
            />
        </div>
    );
};

export default CollegeScene;
