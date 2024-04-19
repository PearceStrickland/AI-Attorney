import React, { useState, useEffect, useRef } from 'react';
import useScene from '../hooks/useScene.js';
import Typewriter from './typewriter.js';
import courtroomImage from '../images/Judge.png';
import thudSound from '../audio/thud.wav';

const JudgeCourtroomScene = ({ entries, onSceneComplete, header, endGame }) => {
    const { currentEntryIndex, handleClick, setTypingComplete } = useScene(entries, onSceneComplete);
    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];
    const [verdictShown, setVerdictShown] = useState(false);
    const audioRef = useRef(new Audio(thudSound));

    useEffect(() => {
        if (endGame) {
            const playSound = () => {
                audioRef.current.currentTime = 0;
                audioRef.current.play().catch(e => console.error("Failed to play audio:", e));
            };

            playSound();
            const timeoutId = setTimeout(playSound, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [endGame]);

    const handleVerdictClick = () => {
        if (verdictShown) {
            onSceneComplete();
        } else {
            setVerdictShown(true);
        }
    };

    return (
        <div className="game-background" onClick={endGame ? handleVerdictClick : handleClick} style={{ backgroundImage: `url(${courtroomImage})` }}>
            {!endGame ? (
                <>
                    {header && <div className="scene-header">{header}</div>}
                    <img src={currentPose} alt="Judge Pose" className="character-image judge-image" />
                    <Typewriter text={currentText} speaker={"Judge"} onComplete={() => setTypingComplete(true)} />
                </>
            ) : (
                <div className="verdict-animation">
                    <div className="not">NOT</div>
                    <div className="guilty">GUILTY</div>
                </div>
            )}
        </div>
    );
};

export default JudgeCourtroomScene;
