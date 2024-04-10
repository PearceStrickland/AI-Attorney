import React, { useState } from 'react';
import './GameScreen.css';
import JudgeCourtroomScene from './JudgeCourtroomScene';
import ProsecutorScene from './ProsecutorScene';
import attorney_look from '../images/attorney_look.png';
import attorney_two from '../images/attorney_two.png';

function GameScreen() {
    const entriesList = [
        { scene: 'judge', dialogues: [[attorney_look, 'Order in the court!'], [attorney_two, 'You are out of order!'], [attorney_look, "Please continue."]], author: 'Judge'},
        { scene: 'prosecutor', dialogues: [[attorney_two, "I have evidence to present."], [attorney_look, "This changes everything!"]], author: 'Prosecutor'},
        { scene: 'judge', dialogues: [[attorney_look, "What further evidence do you have?"], [attorney_two, "I have new evidence to submit."], [attorney_look, "Proceed with the submission."]], author: 'Judge' },
        { scene: 'prosecutor', dialogues: [[attorney_two, "Here's further proof."], [attorney_look, "This evidence is crucial."]], author: 'Prosecutor'}
    ];

    const [entryIndex, setEntryIndex] = useState(0);

    const handleSceneComplete = () => {
        setEntryIndex(entryIndex + 1);
    };

    const renderScene = () => {
        const currentEntry = entriesList[entryIndex];
        if (currentEntry.scene === 'judge') {
            return <JudgeCourtroomScene entries={currentEntry.dialogues} onSceneComplete={handleSceneComplete} />;
        } else if (currentEntry.scene === 'prosecutor') {
            return <ProsecutorScene entries={currentEntry.dialogues} onSceneComplete={handleSceneComplete} />;
        } else {
            return <div>End of Game or Transition to Next Part</div>;
        }
    };

    return (
        <div className="game-screen">
            {renderScene()}
        </div>
    );
}

export default GameScreen;
