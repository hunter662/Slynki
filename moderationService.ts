import { Video } from '../models/index';

const inappropriateKeywords = ['violence', 'nudity', 'hate speech', 'drugs'];

export const moderateVideo = (video: Video): boolean => {
    const titleContainsInappropriateContent = inappropriateKeywords.some(keyword => 
        video.title.toLowerCase().includes(keyword)
    );

    const descriptionContainsInappropriateContent = inappropriateKeywords.some(keyword => 
        video.description.toLowerCase().includes(keyword)
    );

    return !(titleContainsInappropriateContent || descriptionContainsInappropriateContent);
};

export const banVideo = (videoId: string): void => {
    // Logic to ban the video
};

export const unbanVideo = (videoId: string): void => {
    // Logic to unban the video
};