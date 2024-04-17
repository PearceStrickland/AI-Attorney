import React from 'react';
import useScene from '../hooks/useScene.js';
import Typewriter from './typewriter.js';
import prosecutorImage from '../images/Prosecutor.png';

const ProsecutorScene = ({ entries, onSceneComplete }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = useScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];

    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${prosecutorImage})` }}>
            <img src={currentPose} alt="Pose" className="character-image prosecutor-image" />
            <Typewriter
                text={currentText} 
                speaker={"Opposing Attorney"} 
                onComplete={() => setTypingComplete(true)}
            />
        </div>
    );
};

export default ProsecutorScene;
