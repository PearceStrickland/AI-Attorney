import React from 'react';
import useScene from '../hooks/useScene.js';
import Typewriter from './typewriter.js';
import courtroomImage from '../images/Judge.png';

const JudgeCourtroomScene = ({ entries, onSceneComplete, header }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = useScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${courtroomImage})` }}>
            <div className="scene-header">{header}</div>
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
