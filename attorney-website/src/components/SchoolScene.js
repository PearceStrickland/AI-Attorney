import React, { useState, useEffect } from 'react';
import useScene from '../hooks/useScene.js';
import Typewriter from './typewriter.js';
import schoolImage from '../images/School.png';

const SchoolScene = ({ entries, author, interactionType, onSceneComplete, header }) => {
    const { currentEntryIndex, handleClick, setTypingComplete, typingComplete } = useScene(entries, onSceneComplete);
    const [showResponse, setShowResponse] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

    useEffect(() => {
        if (interactionType === 'interactive' && answeredQuestions.length === entries.length && !showResponse) {
            onSceneComplete();
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
                }} style={{ backgroundImage: `url(${schoolImage})` }}>
                    {pose && <img src={pose} alt="Character Pose" className="character-image school-image" />}
                    <Typewriter text={response} speaker={selectedEntry.author} onComplete={() => setTypingComplete(true)} />
                </div>
            );
        } else {
            return (
                <div className="game-background" style={{ backgroundImage: `url(${schoolImage})` }}>
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
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${schoolImage})` }}>
            {header && <div className="scene-header">{header}</div>}
            <img src={currentPose} className="character-image school-image" />
            <Typewriter text={currentText} speaker={author} onComplete={() => setTypingComplete(true)} />
        </div>
    );
};

export default SchoolScene;
