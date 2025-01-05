import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-screen">
            <div className="slinky-animation">
                {/* Add your slinky animation here */}
            </div>
            <h1>Loading Slynki...</h1>
        </div>
    );
};

export default LoadingScreen;