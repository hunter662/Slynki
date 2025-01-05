import React from 'react';
import './PlayButton.css';

interface PlayButtonProps {
    isPlaying: boolean;
    onClick: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying, onClick }) => {
    return (
        <button className="play-button" onClick={onClick}>
            {isPlaying ? (
                <img src="/slinky-icon.svg" alt="Pause" className="play-icon" />
            ) : (
                <img src="/slinky-icon.svg" alt="Play" className="play-icon" />
            )}
        </button>
    );
};

export default PlayButton;