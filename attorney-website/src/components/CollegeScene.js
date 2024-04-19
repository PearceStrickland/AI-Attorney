import React, { useState, useRef, useEffect } from 'react';
import useScene from '../hooks/useScene.js';
import Typewriter from './typewriter.js';
import collegeImage from '../images/College.png';

const CollegeScene = ({ entries, music = null, author, interactionType, onSceneComplete, header }) => {
    const { currentEntryIndex, handleClick, setTypingComplete, typingComplete } = useScene(entries, onSceneComplete);
    const [showResponse, setShowResponse] = useState(false);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);
    const audioRef = useRef(new Audio(music));

    useEffect(() => {
        const playSound = () => {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.error("Failed to play audio:", e));
        };

        playSound();
        return;
    }, [music]);

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
                }} style={{ backgroundImage: `url(${collegeImage})` }}>
                    {pose && <img src={pose} alt="Character Pose" className="character-image college-image" />}
                    <Typewriter text={response} speaker={selectedEntry.author} onComplete={() => setTypingComplete(true)} />
                </div>
            );
        } else {
            return (
                <div className="game-background" style={{ backgroundImage: `url(${collegeImage})` }}>
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
        <div className="game-background" onClick={handleClick} style={{ backgroundImage: `url(${collegeImage})` }}>
            {header && <div className="scene-header">{header}</div>}
            <img src={currentPose} className="character-image college-image" />
            <Typewriter text={currentText} speaker={author} onComplete={() => setTypingComplete(true)} />
        </div>
    );
};

export default CollegeScene;
