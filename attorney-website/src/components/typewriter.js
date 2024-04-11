import React, { useState, useEffect, useRef } from 'react';
import './typewriter.css';
import typewriterSound from '../audio/typewriter-clack.wav';

function Typewriter({ text, speed = 30, speaker, onComplete }) {
    const [displayedText, setDisplayedText] = useState('');
    const index = useRef(0);
    const intervalId = useRef(null);
    const audioRef = useRef(new Audio(typewriterSound));

    // Play audio for typewriter effect
    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reset audio position
            audioRef.current.play().catch(e => console.error("Failed to play audio:", e));
        }
    };

    // Type the next character
    const typeNextChar = () => {
        if (index.current < text.length) {
            setDisplayedText(prev => prev + text.charAt(index.current));
            playSound();
            index.current += 1;
        } else {
            clearInterval(intervalId.current); // Stop typing
            onComplete && onComplete(); // Notify completion when all text has been typed
        }
    };

    // Initialize the typewriter effect
    useEffect(() => {
        index.current = 0;  // Reset index
        setDisplayedText(''); // Clear the text initially

        intervalId.current = setInterval(typeNextChar, speed);
        return () => clearInterval(intervalId.current); // Clean up interval on component unmount or text change
        // eslint-disable-next-line
    }, [text, speed]); // Dependency on text and speed

    // Unlock audio on first interaction
    useEffect(() => {
        const unlockAudio = () => {
            audioRef.current.play().then(() => {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }).catch(e => console.error("Audio failed to unlock:", e));
        };

        document.addEventListener('click', unlockAudio, { once: true });
        return () => document.removeEventListener('click', unlockAudio);
    }, []);

    return (
        <div className="typewriter-container">
            {speaker && <div className="typewriter-header">{speaker}</div>}
            <div className="typewriter-text">{displayedText}</div>
        </div>
    );
}

export default Typewriter;
