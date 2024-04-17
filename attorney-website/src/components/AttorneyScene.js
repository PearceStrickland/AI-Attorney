import React, { useState, useEffect } from 'react';
import useScene from '../hooks/useScene.js';
import Typewriter from './typewriter.js';
import attorneyImage from '../images/Attorney.png';

const AttorneyScene = ({ entries, interactionType, onSceneComplete, header }) => {
    const { currentEntryIndex, handleClick, setTypingComplete, typingComplete } = useScene(entries, onSceneComplete);
    const [showResponse, setShowResponse] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    useEffect(() => {
        if (interactionType === 'interactive' && answeredQuestions.length === 1 && !showResponse) {
            onSceneComplete(answeredQuestions[0]);
        }
    }, [answeredQuestions, showResponse, entries.length, interactionType, onSceneComplete]);

    const handleQuestionClick = (index) => {
        setShowResponse(true);
        setSelectedQuestionIndex(index);
        if (!answeredQuestions.includes(index)) {
            setAnsweredQuestions(prev => [...prev, index]);
        }
        setTypingComplete(false);
    };

    if (interactionType === 'interactive') {
        if (showResponse) {
            const selectedEntry = entries[selectedQuestionIndex];
            const response = selectedEntry.response;
            const pose = selectedEntry.pose;
            return (
                <div className="game-background" onClick={() => {
                    if (typingComplete) setShowResponse(false);
                }} style={{ backgroundImage: `url(${attorneyImage})` }}>
                    {header && <div className="scene-header">{header}</div>}
                    {pose && <img src={pose} alt="Character Pose" className="character-image attorney-image" />}
                    <Typewriter text={response} speaker={"You"} onComplete={() => setTypingComplete(true)} />
                </div>
            );
        } else {
            return (
                <div className="game-background" style={{ backgroundImage: `url(${attorneyImage})` }}>
                    <div className="question-container">
                        {entries.map((question, index) => {
                            if (!answeredQuestions.includes(index)) {
                                return (
                                    <button key={index} onClick={() => handleQuestionClick(index)} className="question-button">
                                        {question.text}
                                    </button>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            );
        }
    }

    const { 0: currentPose, 1: currentText } = entries[currentEntryIndex];
    return (
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${attorneyImage})` }}>
            {header && <div className="scene-header">{header}</div>}
            <img src={currentPose} className="character-image attorney-image" />
            <Typewriter text={currentText} speaker={"You"} onComplete={() => setTypingComplete(true)} />
        </div>
    );
};

export default AttorneyScene;
