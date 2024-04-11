import React from 'react';
import useScene from '../hooks/useScene.js';
import Typewriter from './typewriter.js';
import attorneyImage from '../images/Attorney.png';

const AttorneyScene = ({ entries, onSceneComplete, header }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = useScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${attorneyImage})` }}>
            {header && <div className="scene-header">{header}</div>}
            <img src={currentPose} alt="Pose" className="character-image attorney-image" />
            <Typewriter 
                text={currentText} 
                speaker={"You"} 
                onComplete={() => setTypingComplete(true)}
            />
        </div>
    );
};

export default AttorneyScene;
