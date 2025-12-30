// Export all services from a single entry point
export { default as faqService } from './faqService';
export { default as testimonialService } from './testimonialService';
export { default as speakingClubService } from './speakingClubService';
export { default as ieltsService } from './ieltsService';


// Export types
export type { FAQ } from './faqService';
export type { Testimonial } from './testimonialService';
export type { SpeakingClub, SpeakingClubSlot } from './speakingClubService';
export type { IELTS } from './ieltsService';

