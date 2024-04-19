import React, { useState, useEffect, useRef } from 'react';
import './GameScreen.css';
import JudgeCourtroomScene from './JudgeCourtroomScene';
import ProsecutorScene from './ProsecutorScene';
import AttorneyScene from './AttorneyScene';
import WitnessScene from './WitnessScene';
import SchoolScene from './SchoolScene';
import CollegeScene from './CollegeScene';
import judge_angry from '../images/judge_angry.png';
import judge_neutral from '../images/judge_neutral.png';
import judge_enraged from '../images/judge_enraged.png';
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
import prosecutor_angry from '../images/prosecutor_angry.png';
import prosecutor_neutral from '../images/prosecutor_neutral.png';
import prosecutor_sweaty from '../images/prosecutor_sweaty.png';
import witness_admissionofficer from '../images/witness_admissionofficer.png';
import witness_aiexpert from '../images/witness_aiexpert.png';
import objection from '../audio/objection.mp3';
import calm_beginning from '../audio/beginning.mp3';
import slight_suspense from '../audio/slight_suspense.mp3';
import truth_revealed from '../audio/truth_revealed.mp3';
import winning from '../audio/winning.mp3';
import witness_examination from '../audio/witness_examination.mp3';
import witness_interrogation from '../audio/witness_interrogation.mp3';
import ending from '../audio/ending.mp3';


function GameScreen() {
    const entriesList = [
        // Opening scene
        { interactionType: 'linear', music: calm_beginning, scene: 'judge', header: "Opening Deliberations", dialogues: [[judge_neutral, "W e are gathered today to deliberate on how University of Georgia's AI-driven admission process has impacted the futures of potential students. Counselor, what is at the heart of your client's grievance?"]], author: 'Judge'},
        { interactionType: 'linear', music: calm_beginning, scene: 'attorney', dialogues: [[attorney_crossarms, "Y our Honor, my client, Erica, has been rejected by UGA. However, this is not just about a rejection letter; it's about the flawed algorithms behind the decision-making process that are shaping our youth's future."]], author: "You"},
        { interactionType: 'linear', music: calm_beginning, scene: 'prosecutor', dialogues: [[prosecutor_angry, "W ith all due respect, Your Honor, the allegations leveled against University of Georgia's admission process are unfounded. The AI in question does not tire, does not discriminate, does not harbor prejudices."]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: calm_beginning, scene: 'judge', dialogues: [[judge_neutral, "T hank you both. Let us proceed with the testimonies and evidence to determine the validity of these claims."]], author: "Judge"},

        // Student Scene
        { interactionType: 'linear', music: witness_interrogation, scene: 'school', header: "Scene 1: High School", dialogues: [[student_happy, "G ood morning, Erica. Let's go over your case regarding your college admission. What exactly happened when you got the response from the University of Georgia?"]], author: "You"},
        { interactionType: 'linear', music: witness_interrogation, scene: 'school', dialogues: [[student_happy, " Good morning. Well, I received this email out of the blue. It said, 'After careful evaluation by our advanced AI system, we regret to inform you that you have not been selected for admission.' I was shocked. My application was strong in every conventional sense."]], author: "Erica"},
        { interactionType: 'linear', music: witness_interrogation, scene: 'school', dialogues: [[student_sad, " I was shocked. My application was strong in every conventional sense."]], author: "Erica"},
        { interactionType: 'linear', music: witness_interrogation, scene: 'school', dialogues: [[student_sad, " It sucks, UGA was my dream school."]], author: "Erica"},

        { interactionType: 'interactive', music: witness_interrogation, scene: 'school', dialogues: [
            { pose: student_neutral, text: "Can you tell me about the strengths of your application? Is it possible there’s something the AI missed?", response: "C ertainly. I had a 4.0 GPA, a perfect SAT score, and I’ve been involved in numerous extracurricular activities, including leading a community service initiative. It doesn’t make sense.", author: "Erica" },
            { pose: student_sad, text: "Have you contacted the college for a more detailed explanation of the AI's decision?", response: "Y es, I did. But they only responded with generic answers about the high level of competition and the efficiency of their AI system. No specifics were given.", author: "Erica" },
            { pose: student_neutral, text: "Is there any particular aspect of your application that you think the AI might have misunderstood or overlooked?", response: "I  think so. My essay discussed overcoming personal challenges that affected my early high school grades.", author: "Erica" },
        ]},
        
        // College Scene
        { interactionType: 'linear', music: slight_suspense, scene: 'college', header: "Scene 2: UGA", dialogues: [[dean_angry, "I 'm here to discuss the admission process, particularly how you use AI to evaluate applicants."]], author: "You"},
        { interactionType: 'linear', music: slight_suspense, scene: 'college', dialogues: [[dean_neutral, " I understand, the AI helps us process applications more efficiently. It’s unbiased and accurate."]], author: "The Dean"},
        { interactionType: 'interactive', music: slight_suspense, scene: 'college', dialogues: [
            { pose: dean_neutral, text: "How does the AI system work?", response: "I t analyzes academic records, test scores, and extracurricular activities to predict the applicant's success at our college.", author: "Dean" },
            { pose: dean_confusion, text: "Can the AI system make mistakes?", response: "W ell, it's a machine. It operates within the parameters we set, but I suppose no system is perfect.", author: "Dean" },
            { pose: dean_angry, text: "How can applicants appeal AI decisions?", response: "O fficially, there's an appeals process, but it’s more of a formality. The AI’s decisions are rarely overturned.", author: "Dean" },
        ]},

        // Courtroom Scene
        { interactionType: 'linear', music: truth_revealed, scene: 'attorney', header: "Scene 3: The Courtroom", dialogues: [[attorney_thinking, "Y our Honor, this is not just about a rejection letter; it's about the algorithms that are shaping our youth's future without accountability."]], author: "You"},
        { interactionType: 'linear', music: truth_revealed, scene: 'prosecutor', dialogues: [[prosecutor_neutral, "W ith all due respect, Your Honor, the allegations leveled against University of Georgia's admission process are unfounded. The AI in question does not tire, does not discriminate, does not harbor prejudices. It is a tool—a sophisticated one—that enables us to process an overwhelming number of applications equitably."]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: truth_revealed, scene: 'attorney', dialogues: [[attorney_talking, "M ay I approach the bench with Exhibit A? This is Erica’s application, it exceeds the college's stated academic and extracurricular standards. And yet, the AI dismissed it."]], author: "You"},
        { interactionType: 'linear', music: truth_revealed, scene: 'prosecutor', dialogues: [[prosecutor_neutral, "Y our Honor, I would like to point out that merit is multifaceted. The AI is programmed to evaluate many factors, including those that go beyond grades and scores."]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: truth_revealed, scene: 'judge', dialogues: [[judge_angry, "I  acknowledge the exhibits presented. Let us not forget, however, that the human experience cannot be quantified in its entirety. Counselor, you mentioned an expert analysis?"]], author: "Judge"},
        { interactionType: 'linear', music: truth_revealed, scene: 'attorney', dialogues: [[attorney_happy, "P recisely, Your Honor. If I may direct the court's attention to Exhibit B. This report, authored by a leading expert in artificial intelligence, underscores the limitations of AI in interpreting the nuances and context of an applicant's personal journey."]], author: "You"},
        { interactionType: 'linear', music: truth_revealed, scene: 'attorney', dialogues: [[attorney_talking, " The report suggests that AI, as it stands, may not be equipped to fully understand or evaluate the unique challenges and achievements of each applicant."]], author: "You"},
        { interactionType: 'linear', music: truth_revealed, scene: 'prosecutor', dialogues: [[prosecutor_sweaty, "W e contest the notion that the AI has overlooked anything of significance."]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: truth_revealed, scene: 'attorney', dialogues: [[attorney_crossarms, "M ay I continue with Exhibit C, Your Honor?"]], author: "You"},
        { interactionType: 'linear', music: truth_revealed, scene: 'judge', dialogues: [[judge_neutral, "Y es, proceed"]], author: "Judge"},
        { interactionType: 'linear', music: truth_revealed, scene: 'attorney', dialogues: [[attorney_crossarms, "H ere we present a statistical analysis revealing a concerning pattern within the AI’s decisions. Certain applicant profiles are consistently undervalued."]], author: "You"},
        { interactionType: 'linear', music: truth_revealed, scene: 'judge', dialogues: [[judge_angry, "T he court will thoroughly examine these arguments and the evidence provided before us."]], author: "Judge"},

        // Testimonies
        { interactionType: 'linear', music: witness_examination, scene: 'attorney', header: "Scene 4: Testimonies", dialogues: [[attorney_talking, "W e now call Dr. Jane Smith, an expert in AI and machine learning, to the stand."]], author: "You"},
        { interactionType: 'linear', music: witness_examination, scene: 'witness', dialogues: [[witness_aiexpert, "T hank you. I’ve reviewed the AI system used by the University of Georgia. While AI can efficiently process data, it often lacks the ability to fully understand the nuances of human experiences and backgrounds."]], author: "Dr. Jane Smith"},
        { interactionType: 'linear', music: witness_examination, scene: 'prosecutor', dialogues: [[prosecutor_neutral, "D r. Smith, isn’t it true that AI reduces human bias in admissions?"]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: witness_examination, scene: 'witness', dialogues: [[witness_aiexpert, "W hile it can reduce certain biases, it also risks introducing new ones, depending on the data it’s trained on and the criteria set by the institution."]], author: "Dr. Jane Smith"},

        { interactionType: 'linear', music: witness_examination, scene: 'attorney', dialogues: [[attorney_talking, "I  call Mr. John Doe, a former admissions officer at University of Georgia, to testify."]], author: "You"},
        { interactionType: 'linear', music: witness_examination, scene: 'witness', dialogues: [[witness_admissionofficer, "I n my experience, the AI system was a tool, but it couldn’t capture the whole picture. Many of us felt that some decisions made by the AI didn’t reflect the values and goals of the college."]], author: "John Doe"},
        { interactionType: 'linear', music: witness_examination, scene: 'prosecutor', dialogues: [[prosecutor_angry, "M r. Doe, isn’t it the case that the college’s admission standards have always been maintained?"]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: witness_examination, scene: 'witness', dialogues: [[witness_admissionofficer, "T he standards were maintained, but the process felt impersonal. We used to consider the student's story, their potential. The AI focuses more on metrics."]], author: "John Doe"},

        { interactionType: 'linear', music: witness_examination, scene: 'attorney', dialogues: [[attorney_talking, "L et’s hear from student Erica who believes they were unfairly evaluated by the AI system."]], author: "You"},
        { interactionType: 'linear', music: witness_examination, scene: 'witness', dialogues: [[student_sad, "I  was devastated when I got rejected. I had worked so hard, and it felt like the AI just ignored everything that I thought made me a good candidate."]], author: "Erica"},
        { interactionType: 'linear', music: witness_examination, scene: 'prosecutor', dialogues: [[prosecutor_angry, "B ut isn’t it possible that the competition was simply too strong that year?"]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: witness_examination, scene: 'witness', dialogues: [[student_sad, "M aybe, but friends with similar or even lower qualifications got in. It just doesn’t add up. I feel like the AI didn’t see the real me."]], author: "Erica"},

        // Closing Arguments

        // Decision Time - 36
        { interactionType: 'interactive', music: slight_suspense, scene: 'attorney', dialogues: [
            { pose: attorney_triumphant, text: "AI cannot capture what makes an applicant unique on a personal level.", header: "Scene 5: Closing Arguments", response: "Y our Honor, we’ve shown that the AI system at University of Georgia is flawed. It misses the essence of what makes each applicant unique and capable. We must ensure fairness and transparency in such critical decisions affecting young lives.", author: "You" },
            { pose: attorney_crossarms, text: "UGA sucks so its AI sucks.", response: "W ell, UGA as a college, sucks. By proxy, its AI sucks and Erica should be admitted.", author: "You" },
            { pose: attorney_crossarms, text: "The AI was trained on biased data!", response: "T here is a high chance that this AI was trained on biased or skewed data, leading to flawed decision-making.", author: "You" },
        ]},

        // Correct Decision - 37
        { interactionType: 'linear', music: winning, scene: 'prosecutor', dialogues: [[prosecutor_angry, "Y our Honor, while no system is perfect, the AI has enabled the University of Georgia to handle an ever-growing number of applicants."]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: winning, scene: 'judge', dialogues: [[judge_neutral, "T hank you both. The impact of AI in education is profound and warrants careful consideration."]], author: "Judge"},
        { interactionType: 'linear', music: winning, scene: 'judge', dialogues: [[judge_neutral, " After careful consideration, I have deemed that the University of Georgia has employed a biased system to review candidates, and a system they themselves do not truly understand. UGA will reconsider Erica's application into their college through a manual process, and I deem Erica..."]], author: "Judge"},
        { interactionType: 'linear', music: winning, scene: 'judge', endGame: true, dialogues: [[judge_neutral, "NOT GUILTY"]], author: "Judge"},
        { music: ending, scene: 'end'},

        // 1st Incorrect Decision - 42
        { interactionType: 'linear', music: slight_suspense, scene: 'prosecutor', dialogues: [[prosecutor_angry, "H OW IS THIS RELEVANT!"]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: slight_suspense, scene: 'judge', dialogues: [[judge_enraged, "Y es, on what grounds are you making these foolish assumptions."]], author: "Judge"},
        { interactionType: 'linear', music: slight_suspense, scene: 'attorney', dialogues: [[attorney_thinking, "Uhhhhhhhhhh"]], author: "You"},

        // 2nd Incorrect Decision - 45
        { interactionType: 'linear', music: slight_suspense, scene: 'prosecutor', dialogues: [[prosecutor_angry, "T here is no proof on how flawed the training process is!"]], author: "Opposing Attorney"},
        { interactionType: 'linear', music: slight_suspense, scene: 'judge', dialogues: [[judge_angry, "A greed, do you have any evidence to back this up?"]], author: "Judge"},
        { interactionType: 'linear', music: slight_suspense, scene: 'attorney', dialogues: [[attorney_talking, "W ell...there is no proof on the contrary...I think"]], author: "You"},
    ];

    const [entryIndex, setEntryIndex] = useState(0);
    const audioRef = useRef(null);

    const handleSceneComplete = (index) => {
        if (index === 0) {
            setEntryIndex(entryIndex + 1);
        } else if (index === 1) {
            setEntryIndex(42);
        } else if (index === 2) {
            setEntryIndex(45);
        } else if (entryIndex === 44) {
            setEntryIndex(36);
        } else if (entryIndex === 47) {
            setEntryIndex(36);
        } else {
            setEntryIndex(entryIndex + 1);
        }
    };

    useEffect(() => {
        const currentEntry = entriesList[entryIndex];

        const playSound = () => {
            audioRef.current = new Audio(currentEntry.music);
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.error("Failed to play audio:", e));
        };
        playSound();
        
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [entriesList[entryIndex].music]);

    const renderScene = () => {
        const currentEntry = entriesList[entryIndex];
        switch (currentEntry.scene) {
            case 'judge':
                return <JudgeCourtroomScene entries={currentEntry.dialogues} onSceneComplete={handleSceneComplete} header={currentEntry.header} endGame={currentEntry.endGame} />;
            case 'attorney':
                return <AttorneyScene entries={currentEntry.dialogues} interactionType={currentEntry.interactionType} onSceneComplete={handleSceneComplete} header={currentEntry.header} />;
            case 'prosecutor':
                return <ProsecutorScene entries={currentEntry.dialogues} onSceneComplete={handleSceneComplete} />;
            case 'school':
                return <SchoolScene entries={currentEntry.dialogues} author={currentEntry.author} interactionType={currentEntry.interactionType} onSceneComplete={handleSceneComplete} header={currentEntry.header} />;
            case 'college':
                return <CollegeScene entries={currentEntry.dialogues} author={currentEntry.author} interactionType={currentEntry.interactionType} onSceneComplete={handleSceneComplete} header={currentEntry.header} />;
            case 'witness':
                return <WitnessScene entries={currentEntry.dialogues} author={currentEntry.author} onSceneComplete={handleSceneComplete}/>;
            case 'end':
                return (
                    <div className="game-end-screen">
                        <h1>Congratulations!</h1>x
                        <p>Thank you for playing! You've reached the end of your journey.</p>
                    </div>
                );
            default:
                return <div>No scene available</div>; // Fallback for undefined scene
        }
    };

    return (
        <div className="game-screen">
            {renderScene()}
        </div>
    );
}

export default GameScreen;
