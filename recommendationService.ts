import { User } from '../types';

const recommendations = [
    { ageGroup: '18-24', gender: 'male', content: ['Action Movie 1', 'Comedy Show 1'] },
    { ageGroup: '18-24', gender: 'female', content: ['Romantic Movie 1', 'Drama Show 1'] },
    { ageGroup: '25-34', gender: 'male', content: ['Thriller Movie 1', 'Documentary 1'] },
    { ageGroup: '25-34', gender: 'female', content: ['Drama Movie 1', 'Comedy Show 2'] },
    // Add more recommendations as needed
];

export const getRecommendations = (user: User) => {
    const userRecommendations = recommendations.find(
        (rec) => rec.ageGroup === user.ageGroup && rec.gender === user.gender
    );
    return userRecommendations ? userRecommendations.content : [];
};