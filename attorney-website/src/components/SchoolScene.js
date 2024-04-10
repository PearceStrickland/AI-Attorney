import React from 'react';
import newScene from '../hooks/newScene';
import Typewriter from './typewriter.js';
import schoolImage from '../images/School.png';

const SchoolScene = ({ entries, author, onSceneComplete }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = newScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${schoolImage})` }}>
            <img src={currentPose} alt="Pose" className="character-image school-image" />
            <Typewriter 
                text={currentText} 
                speaker={author} 
                onComplete={() => setTypingComplete(true)}
            />
        </div>
    );
};

export default SchoolScene;
