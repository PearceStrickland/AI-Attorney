// hooks/useScene.js
import { useState } from 'react';

function useScene(entries, onSceneComplete) {
    const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
    const [typingComplete, setTypingComplete] = useState(true);

    const handleClick = () => {
        if (!typingComplete) return;
        if (currentEntryIndex >= entries.length - 1) {
            onSceneComplete();
            return;
        }

        setTypingComplete(false);
        setCurrentEntryIndex(currentEntryIndex + 1);
    };

    return { currentEntryIndex, handleClick, setTypingComplete };
}

export default useScene;
