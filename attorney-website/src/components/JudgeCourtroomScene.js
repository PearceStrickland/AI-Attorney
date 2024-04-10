import React from 'react';
import newScene from '../hooks/newScene';
import Typewriter from './typewriter.js';
import courtroomImage from '../images/Judge.png';

const JudgeCourtroomScene = ({ entries, onSceneComplete }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = newScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${courtroomImage})` }}>
            <img src={currentPose} alt="Judge Pose" className="character-image judge-image" />
            <Typewriter 
                text={currentText} 
                speaker={"Judge"} 
                onComplete={() => setTypingComplete(true)}
            />
        </div>
    );
};

export default JudgeCourtroomScene;
