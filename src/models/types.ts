// Export all model types for easy importing

export type { CourseModel } from './Course';
export type { CourseVariantModel } from './CourseVariant';
export type { TestimonialModel } from './Testimonial';
export type { FAQCategoryModel } from './FAQCategory';
export type { FAQModel } from './FAQ';
export type { ContactFormModel, ContactFormStatus } from './ContactForm';

// Database models interface
export interface Models {
  Course: import('./Course').CourseModel;
  CourseVariant: import('./CourseVariant').CourseVariantModel;
  Testimonial: import('./Testimonial').TestimonialModel;
  FAQCategory: import('./FAQCategory').FAQCategoryModel;
  FAQ: import('./FAQ').FAQModel;
  ContactForm: import('./ContactForm').ContactFormModel;
}

// Input types for creating records
export interface CreateCourseInput {
  title: string;
  slug: string;
  mini_desc?: string;
  description?: string;
  is_active?: boolean;
}

export interface CreateCourseVariantInput {
  course_id: string;
  title: string;
  mini_desc?: string;
  description?: string;
  price?: number;
  capacity?: number;
  start_date?: Date;
  is_featured?: boolean;
  is_active?: boolean;
}

export interface CreateTestimonialInput {
  client_fullname: string;
  client_job?: string;
  comment: string;
  rating?: number;
  is_active?: boolean;
}

export interface CreateFAQCategoryInput {
  name: string;
  slug?: string;
  sort_order?: number;
  is_active?: boolean;
}

export interface CreateFAQInput {
  category_id?: number;
  question: string;
  answer: string;
  sort_order?: number;
  is_active?: boolean;
}

export interface CreateContactFormInput {
  fullname: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  terms_accepted?: boolean;
  ip_address?: string;
  user_agent?: string;
}

// Update types (partial versions)
export type UpdateCourseInput = Partial<CreateCourseInput>;
export type UpdateCourseVariantInput = Partial<Omit<CreateCourseVariantInput, 'course_id'>>;
export type UpdateTestimonialInput = Partial<CreateTestimonialInput>;
export type UpdateFAQCategoryInput = Partial<CreateFAQCategoryInput>;
export type UpdateFAQInput = Partial<CreateFAQInput>;
export type UpdateContactFormInput = {
  status?: import('./ContactForm').ContactFormStatus;
};
