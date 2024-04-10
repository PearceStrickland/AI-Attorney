import React, { useState } from 'react';
import './GameScreen.css';
import JudgeCourtroomScene from './JudgeCourtroomScene';
import ProsecutorScene from './ProsecutorScene';
import AttorneyScene from './AttorneyScene';
import judge_angry from '../images/judge_angry.png';
import judge_neutral from '../images/judge_neutral.png';
import judge_enraged from '../images/judge_confusion.png';
import student_happy from '../images/student_happy.png';
import student_neutral from '../images/student_neutral.png';
import student_sad from '../images/student_sad.png';
import dean_angry from '../images/dean_angry.png';
import dean_neutral from '../images/dean_neutral.png';
import dean_confusion from '../images/dean_confusion.png';
import dean_sad from '../images/dean_sad.png';
import attorney_angrypoint from '../images/attorney_angrypoint.png';
import attorney_crossarms from '../images/attorney_crossarms.png';
import attorney_happy from '../images/attorney_happy.png';
import attorney_neutral from '../images/attorney_neutral.png';
import attorney_talking from '../images/attorney_talking.png';
import attorney_thinking from '../images/attorney_thinking.png';
import attorney_triumphant from '../images/attorney_triumphant.png';


function GameScreen() {
    const entriesList = [
        { scene: 'attorney', dialogues: [[attorney_crossarms, '1'], [attorney_angrypoint, '2'], [attorney_happy, "3"], [attorney_neutral, "4"], [attorney_talking, "5"], [attorney_thinking, "6"], [attorney_triumphant, "7"]], author: 'Judge'},
        { scene: 'end'}
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
        } else if (currentEntry.scene === 'attorney') {
            return <AttorneyScene entries={currentEntry.dialogues} onSceneComplete={handleSceneComplete} />;
        } else if (currentEntry.scene === 'end') {
            return <div>End of Game</div>;
        }
    };

    return (
        <div className="game-screen">
            {renderScene()}
        </div>
    );
}

export default GameScreen;
