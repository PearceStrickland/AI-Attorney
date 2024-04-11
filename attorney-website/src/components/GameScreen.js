import React, { useState } from 'react';
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


function GameScreen() {
    const entriesList = [
        // Opening scene
        { interactionType: 'linear', scene: 'judge', header: "Opening Deliberations", dialogues: [[judge_neutral, "We are gathered today to deliberate on a matter that bridges technology and humanity—how University of Georgia's AI-driven admission process has impacted the futures of potential students. Counselor, what is at the heart of your client's grievance?"]], author: 'Judge'},
        { interactionType: 'linear', scene: 'attorney', dialogues: [[attorney_crossarms, "Your Honor, my client, Erica, stands before you as the human face of a wider systemic issue. This is not just about a rejection letter; it's about the opaque algorithms that are shaping our youth's future without accountability. We are here to challenge the reliance on a flawed system, a so-called objective AI, which in its cold calculation, failed to recognize the caliber of a deserving student."]], author: "You"},
        { interactionType: 'linear', scene: 'prosecutor', dialogues: [[prosecutor_angry, "With all due respect, Your Honor, the allegations leveled against University of Georgia's admission process are unfounded. The AI in question does not tire, does not discriminate, does not harbor prejudices. It is a tool—a sophisticated one—that enables us to pro[cess an overwhelming number of applications equitably."]], author: "Opposing Attorney"},
        { interactionType: 'linear', scene: 'judge', dialogues: [[judge_neutral, "We proceed with clear eyes and open minds. This court is a bastion for truth and justice, and we shall endeavor to uphold these tenets as we examine the role of AI in shaping the destiny of our nation’s scholars."]], author: "Judge"},
        
        // Student Scene
        { interactionType: 'linear', scene: 'school', header: "Scene 1: High School", dialogues: [[student_happy, "Good morning, Erica. Let's go over your case regarding your college admission. What exactly happened when you got the response from the University of Georgia?"]], author: "You"},
        { interactionType: 'linear', scene: 'school', dialogues: [[student_sad, "Good morning. Well, I received this email out of the blue. It said, 'After careful evaluation by our advanced AI system, we regret to inform you that you have not been selected for admission.' I was shocked. My application was strong in every conventional sense."]], author: "Erica"},
        { interactionType: 'interactive', scene: 'school', dialogues: [
            { pose: student_happy, text: "Can you detail the strengths of your application? Perhaps there’s something the AI missed?", response: "Certainly. I had a 4.0 GPA, a perfect SAT score, and I’ve been involved in numerous extracurricular activities, including leading a community service initiative. It doesn’t make sense.", author: "Erica" },
            { pose: student_happy, text: "Have you contacted the college for a more detailed explanation of the AI's decision?", response: "Yes, I did. But they only responded with generic answers about the high level of competition and the efficiency of their AI system. No specifics were given.", author: "Erica" },
            { pose: student_happy, text: "Is there any particular aspect of your application that you think the AI might have misunderstood or overlooked?", response: "I think so. My essay discussed overcoming personal challenges that affected my early high school grades. Maybe the AI just looked at the numbers and not the context behind them.", author: "Erica" },
        ]},
        
        // College Scene
        { interactionType: 'linear', scene: 'college', header: "Scene 2: UGA", dialogues: [[dean_angry, "I'm here to discuss the admission process, particularly how you use AI to evaluate applicants."]], author: "You"},
        { interactionType: 'linear', scene: 'college', dialogues: [[dean_neutral, "The AI helps us process applications more efficiently. It’s unbiased and accurate."]], author: "The Dean"},
        { interactionType: 'interactive', scene: 'college', dialogues: [
            { pose: dean_neutral, text: "How does the AI system work?", response: "It analyzes academic records, test scores, and extracurricular activities to predict the applicant's success at our college.", author: "Dean" },
            { pose: dean_confusion, text: "Can the AI system make mistakes?", response: "Well, it's a machine. It operates within the parameters we set, but I suppose no system is perfect.", author: "Dean" },
            { pose: dean_angry, text: "How can applicants appeal AI decisions?", response: "Officially, there's an appeals process, but it’s more of a formality. The AI’s decisions are rarely overturned.", author: "Dean" },
        ]},

        // Courtroom Scene
        { interactionType: 'linear', scene: 'attorney', header: "Scene 3: The Courtroom", dialogues: [[attorney_thinking, "Your Honor, this is not just about a rejection letter; it's about the opaque algorithms that are shaping our youth's future without accountability. We are here to challenge the reliance on a flawed system, a so-called objective AI, which in its cold calculation, failed to recognize the caliber of a deserving student."]], author: "You"},
        { interactionType: 'linear', scene: 'prosecutor', dialogues: [[prosecutor_neutral, "With all due respect, Your Honor, the allegations leveled against University of Georgia's admission process are unfounded. The AI in question does not tire, does not discriminate, does not harbor prejudices. It is a tool—a sophisticated one—that enables us to process an overwhelming number of applications equitably."]], author: "Opposing Attorney"},
        { interactionType: 'linear', scene: 'attorney', dialogues: [[attorney_talking, "May I approach the bench with Exhibit A? This is Erica’s application, demonstrating not only fulfillment but the exceeding of the college's stated academic and extracurricular standards. And yet, the AI summarily dismissed it. How can such a decision be deemed equitable?"]], author: "You"},
        { interactionType: 'linear', scene: 'prosecutor', dialogues: [[prosecutor_neutral, "Your Honor, I would like to point out that merit is multifaceted in the context of college admissions. The AI is programmed to evaluate a myriad of factors, including those that go beyond grades and scores."]], author: "Opposing Attorney"},
        { interactionType: 'linear', scene: 'judge', dialogues: [[judge_angry, "I acknowledge the exhibits presented. Let us not forget, however, that the human experience cannot be quantified in its entirety. Counselor, you mentioned an expert analysis?"]], author: "Judge"},
        { interactionType: 'linear', scene: 'attorney', dialogues: [[attorney_happy, "Precisely, Your Honor. If I may direct the court's attention to Exhibit B. This report, authored by a leading expert in artificial intelligence, underscores the limitations of AI in interpreting the nuances and context of an applicant's personal journey. The report suggests that AI, as it stands, may not be equipped to fully understand or evaluate the unique challenges and achievements of each applicant."]], author: "You"},
        { interactionType: 'linear', scene: 'prosecutor', dialogues: [[prosecutor_sweaty, "We contest the notion that the AI has overlooked anything of significance. The system is designed to identify the candidates most likely to thrive at University of Georgia, based on an extensive array of indicators."]], author: "Opposing Attorney"},
        { interactionType: 'linear', scene: 'attorney', dialogues: [[attorney_crossarms, "May I continue with Exhibit C, Your Honor? Here we present a statistical analysis revealing a concerning pattern within the AI’s decisions. Certain applicant profiles are consistently undervalued. This points to a systemic bias that the college has failed to address, calling into question the fairness of the entire admission process."]], author: "You"},
        { interactionType: 'linear', scene: 'judge', dialogues: [[judge_angry, "These points paint a troubling picture indeed—one where we must consider if efficiency has been prioritized over equity. We must question whether a machine can truly grasp the depth of human potential. The court will thoroughly examine these arguments and the evidence provided before us. Rest assured, the decision will reflect our commitment to justice and the fair treatment of all individuals under the law."]], author: "Judge"},

        // Testimonies
        { interactionType: 'linear', scene: 'attorney', header: "Scene 4: Testimonies", dialogues: [[attorney_talking, "We now call Dr. Jane Smith, an expert in AI and machine learning, to the stand."]], author: "You"},
        { interactionType: 'linear', scene: 'witness', dialogues: [[witness_aiexpert, "Thank you. I’ve reviewed the AI system used by the University of Georgia. While AI can efficiently process data, it often lacks the ability to fully understand the nuances of human experiences and backgrounds."]], author: "Dr. Jane Smith"},
        { interactionType: 'linear', scene: 'prosecutor', dialogues: [[prosecutor_neutral, "Dr. Smith, isn’t it true that AI reduces human bias in admissions?"]], author: "Opposing Attorney"},
        { interactionType: 'linear', scene: 'witness', dialogues: [[witness_aiexpert, "While it can reduce certain biases, it also risks introducing new ones, depending on the data it’s trained on and the criteria set by the institution."]], author: "Dr. Jane Smith"},

        { interactionType: 'linear', scene: 'attorney', dialogues: [[attorney_talking, "I call Mr. John Doe, a former admissions officer at University of Georgia, to testify."]], author: "You"},
        { interactionType: 'linear', scene: 'witness', dialogues: [[witness_admissionofficer, "In my experience, the AI system was a tool, but it couldn’t capture the whole picture. Many of us felt that some decisions made by the AI didn’t reflect the values and goals of the college."]], author: "John Doe"},
        { interactionType: 'linear', scene: 'prosecutor', dialogues: [[prosecutor_angry, "Mr. Doe, isn’t it the case that the college’s admission standards have always been maintained?"]], author: "Opposing Attorney"},
        { interactionType: 'linear', scene: 'witness', dialogues: [[witness_admissionofficer, "The standards were maintained, but the process felt impersonal. We used to consider the student's story, their potential. The AI focuses more on metrics."]], author: "John Doe"},

        { scene: 'end'}
    ];

    const [entryIndex, setEntryIndex] = useState(0);

    const handleSceneComplete = () => {
        setEntryIndex(entryIndex + 1);
    };

    const renderScene = () => {
        const currentEntry = entriesList[entryIndex];
        switch (currentEntry.scene) {
            case 'judge':
                return <JudgeCourtroomScene entries={currentEntry.dialogues} onSceneComplete={handleSceneComplete} header={currentEntry.header} />;
            case 'attorney':
                return <AttorneyScene entries={currentEntry.dialogues} onSceneComplete={handleSceneComplete} />;
            case 'prosecutor':
                return <ProsecutorScene entries={currentEntry.dialogues} onSceneComplete={handleSceneComplete} />;
            case 'school':
                return <SchoolScene entries={currentEntry.dialogues} author={currentEntry.author} interactionType={currentEntry.interactionType} onSceneComplete={handleSceneComplete} header={currentEntry.header} />;
            case 'college':
                return <CollegeScene entries={currentEntry.dialogues} author={currentEntry.author} interactionType={currentEntry.interactionType} onSceneComplete={handleSceneComplete} header={currentEntry.header} />;
            case 'witness':
                return <WitnessScene entries={currentEntry.dialogues} author={currentEntry.author} onSceneComplete={handleSceneComplete}/>;
            case 'end':
                return <div>End of Game</div>;
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
