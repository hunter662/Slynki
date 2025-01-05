import React from 'react';
import './ContentRules.css';

const ContentRules: React.FC = () => {
    return (
        <div className="content-rules">
            <h2>Content Guidelines</h2>
            <ul>
                <li>No hate speech or harassment.</li>
                <li>No explicit content or nudity.</li>
                <li>No violence or graphic content.</li>
                <li>No spam or misleading content.</li>
                <li>Respect copyright and intellectual property rights.</li>
            </ul>
            <p>By uploading content, you agree to follow these guidelines. Failure to comply may result in content removal or account suspension.</p>
        </div>
    );
};

export default ContentRules;