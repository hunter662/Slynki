import React from 'react';
import { getRecommendations } from '../services/recommendationService';
import './Recommendations.css';

const Recommendations = ({ userAge, userGender }) => {
    const [recommendations, setRecommendations] = React.useState([]);

    React.useEffect(() => {
        const fetchRecommendations = async () => {
            const data = await getRecommendations(userAge, userGender);
            setRecommendations(data);
        };

        fetchRecommendations();
    }, [userAge, userGender]);

    return (
        <div className="recommendations">
            <h2>Recommended for You</h2>
            <ul>
                {recommendations.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;