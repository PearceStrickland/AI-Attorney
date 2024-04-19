import { useState } from 'react';

function useScene(entries, onSceneComplete) {
    const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
    const [typingComplete, setTypingComplete] = useState(false);

    const handleClick = () => {
        if (!typingComplete) return;

        // Handle linear dialogues
        if (currentEntryIndex < entries.length - 1) {
            setCurrentEntryIndex(currentEntryIndex + 1);
        } else {
            onSceneComplete();
        }
        setTypingComplete(false);
    };

    return { currentEntryIndex, handleClick, setTypingComplete, typingComplete };
}

export default useScene;
