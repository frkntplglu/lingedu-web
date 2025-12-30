// Export all services from a single entry point
export { default as faqService } from './faqService';
export { default as testimonialService } from './testimonialService';
export { default as courseService } from './courseService';
export { default as contactFormService } from './contactFormService';


// Export types
export type { FAQ, FAQCategory } from './faqService';
export type { Testimonial } from './testimonialService';
export type { Course, CourseVariant, CourseWithVariants } from './courseService';
export type { ContactForm, InsertContactForm } from './contactFormService';

