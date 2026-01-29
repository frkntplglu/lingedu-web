import * as yup from 'yup';

/**
 * Common validation patterns
 */
export const commonSchemas = {
  email: yup.string()
    .required('Email is required')
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),

  phone: yup.string()
    .optional()
    .matches(/^[+]?[\d\s\-()]+$/, 'Invalid phone number')
    .max(20, 'Phone number must be less than 20 characters'),

  urlSlug: yup.string()
    .required('Slug is required')
    .matches(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens')
    .max(255, 'Slug must be less than 255 characters'),

  positiveNumber: yup.number()
    .optional()
    .positive('Must be a positive number')
    .typeError('Must be a number'),

  boolean: yup.boolean()
    .optional(),
};

/**
 * Contact Form Validation Schema
 */
export const contactFormSchema = yup.object({
  fullname: yup.string()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(255, 'Full name must be less than 255 characters')
    .trim(),
  email: commonSchemas.email,
  phone: yup.string()
    .optional()
    .nullable()
    .max(20, 'Phone number must be less than 20 characters')
    .trim(),
  subject: yup.string()
    .optional()
    .nullable()
    .max(255, 'Subject must be less than 255 characters')
    .trim(),
  message: yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
    .trim(),
  terms_accepted: yup.boolean()
    .required('You must accept the terms')
    .oneOf([true], 'You must accept the terms'),
});

/**
 * FAQ Validation Schema
 */
export const faqSchema = yup.object({
  question: yup.string()
    .required('Question is required')
    .min(10, 'Question must be at least 10 characters')
    .max(500, 'Question must be less than 500 characters')
    .trim(),
  answer: yup.string()
    .required('Answer is required')
    .min(10, 'Answer must be at least 10 characters')
    .trim(),
  category_id: yup.number()
    .optional()
    .nullable()
    .positive('Category ID must be positive')
    .integer('Category ID must be an integer')
    .typeError('Category ID must be a number'),
  sort_order: yup.number()
    .optional()
    .integer('Sort order must be an integer')
    .min(0, 'Sort order must be 0 or greater')
    .default(0),
  is_active: yup.boolean().optional().default(true),
});

/**
 * FAQ Category Validation Schema
 */
export const faqCategorySchema = yup.object({
  name: yup.string()
    .required('Category name is required')
    .min(2, 'Category name must be at least 2 characters')
    .max(100, 'Category name must be less than 100 characters')
    .trim(),
  slug: yup.string()
    .optional()
    .nullable()
    .matches(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens')
    .max(100, 'Slug must be less than 100 characters')
    .trim(),
  sort_order: yup.number()
    .optional()
    .integer('Sort order must be an integer')
    .min(0, 'Sort order must be 0 or greater')
    .default(0),
  is_active: yup.boolean().optional().default(true),
});

/**
 * Course Validation Schema
 */
export const courseSchema = yup.object({
  title: yup.string()
    .required('Title is required')
    .min(2, 'Title must be at least 2 characters')
    .max(255, 'Title must be less than 255 characters')
    .trim(),
  slug: commonSchemas.urlSlug,
  mini_desc: yup.string()
    .optional()
    .nullable()
    .max(500, 'Mini description must be less than 500 characters')
    .trim(),
  description: yup.string()
    .optional()
    .nullable()
    .trim(),
  is_active: yup.boolean().optional().default(true),
});

/**
 * Course Variant Validation Schema
 */
export const courseVariantSchema = yup.object({
  course_id: yup.string()
    .required('Course ID is required')
    .uuid('Invalid course ID format')
    .trim(),
  title: yup.string()
    .required('Title is required')
    .max(255, 'Title must be less than 255 characters')
    .trim(),
  mini_desc: yup.string()
    .optional()
    .nullable()
    .max(500, 'Mini description must be less than 500 characters')
    .trim(),
  description: yup.string()
    .optional()
    .nullable()
    .trim(),
  price: yup.number()
    .optional()
    .nullable()
    .positive('Price must be positive')
    .typeError('Price must be a number'),
  capacity: yup.number()
    .optional()
    .nullable()
    .positive('Capacity must be at least 1')
    .integer('Capacity must be a whole number')
    .typeError('Capacity must be a number'),
  start_date: yup.date()
    .optional()
    .nullable()
    .typeError('Invalid date format'),
  is_featured: yup.boolean().optional().default(false),
  is_active: yup.boolean().optional().default(true),
});

/**
 * Testimonial Validation Schema
 */
export const testimonialSchema = yup.object({
  client_fullname: yup.string()
    .required('Client name is required')
    .min(2, 'Client name must be at least 2 characters')
    .max(255, 'Client name must be less than 255 characters')
    .trim(),
  client_job: yup.string()
    .optional()
    .nullable()
    .max(255, 'Job title must be less than 255 characters')
    .trim(),
  comment: yup.string()
    .required('Comment is required')
    .min(10, 'Comment must be at least 10 characters')
    .max(2000, 'Comment must be less than 2000 characters')
    .trim(),
  rating: yup.number()
    .optional()
    .nullable()
    .integer('Rating must be a whole number')
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must not exceed 5')
    .typeError('Rating must be a number'),
  is_active: yup.boolean().optional().default(true),
});

/**
 * Helper to validate request data against a schema
 */
export async function validateRequest<T extends yup.AnyObjectSchema>(
  schema: T,
  data: unknown
): Promise<yup.Asserts<T>> {
  try {
    const validated = await schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });
    return validated as yup.Asserts<T>;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const details: Record<string, string> = {};

      error.inner.forEach((err) => {
        if (err.path) {
          details[err.path.toString()] = err.message;
        }
      });

      // If no specific field errors, use the first error message
      if (Object.keys(details).length === 0 && error.errors.length > 0) {
        details.general = error.errors[0];
      }

      throw {
        name: 'ValidationError',
        message: 'Validation failed',
        details,
      };
    }
    throw error;
  }
}
