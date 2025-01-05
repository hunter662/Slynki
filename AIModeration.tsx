import React, { useEffect, useState } from 'react';
import { moderateVideo } from '../services/moderationService';
import './AIModeration.css';

const AIModeration: React.FC<{ videoId: string }> = ({ videoId }) => {
    const [status, setStatus] = useState<string>('Moderating...');
    const [isApproved, setIsApproved] = useState<boolean | null>(null);

    useEffect(() => {
        const performModeration = async () => {
            const result = await moderateVideo(videoId);
            setIsApproved(result.isApproved);
            setStatus(result.isApproved ? 'Approved' : 'Rejected');
        };

        performModeration();
    }, [videoId]);

    return (
        <div className="ai-moderation">
            <h2>AI Moderation Status</h2>
            <p>{status}</p>
            {isApproved !== null && (
                <p>{isApproved ? 'Your video is approved for upload.' : 'Your video has been rejected due to content rules.'}</p>
            )}
        </div>
    );
};

export default AIModeration;