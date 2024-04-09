import React, { useState, useEffect, useRef } from 'react';
import './typewriter.css';

function Typewriter({ text, speed = 70, audio }) {
    const [displayedText, setDisplayedText] = useState('');
    const index = useRef(0);
    const audioRef = useRef(new Audio(audio));

    useEffect(() => {
        const unlockAudio = () => {
            audioRef.current.play().then(() => {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }).catch(e => console.error("Audio failed to unlock:", e));
        };
        window.addEventListener('click', unlockAudio, { once: true });

        return () => {
            window.removeEventListener('click', unlockAudio);
        };
    }, []);

    useEffect(() => {
        if (text.length > 1) {
            // eslint-disable-next-line
            text = text.slice(0, 2) + text.charAt(1) + text.slice(2);
        }

        const typeNextChar = () => {
            if (index.current < text.length) {
                setDisplayedText(prev => prev + text.charAt(index.current));
                if (audioRef.current) {
                    audioRef.current.currentTime = 0;
                    audioRef.current.play().catch(e => console.error("Failed to play audio:", e));
                }
                index.current += 1;
            }
        };

        const timeoutId = setTimeout(typeNextChar, speed);

        return () => clearTimeout(timeoutId);
    }, [displayedText, text, speed]);

    return (
        <div className="typewriter-text">
            {displayedText}
        </div>
    );
}

export default Typewriter;
