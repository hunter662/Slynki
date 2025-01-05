import React, { useState } from 'react';
import { uploadContent } from '../services/moderationService';
import ContentRules from './ContentRules';

const ContentTab = () => {
    const [isRulesAcknowledged, setIsRulesAcknowledged] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            const result = await uploadContent(file);
            // Handle the result of the upload (success/error)
        }
    };

    return (
        <div className="content-tab">
            {!isRulesAcknowledged ? (
                <ContentRules onAcknowledge={() => setIsRulesAcknowledged(true)} />
            ) : (
                <div>
                    <h2>Upload Your Content</h2>
                    <input type="file" onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload</button>
                </div>
            )}
        </div>
    );
};

export default ContentTab;