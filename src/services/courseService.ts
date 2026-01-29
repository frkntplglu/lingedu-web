import models from '../models';
import { toJSON } from '../lib/serialize';

const { Course, CourseVariant } = models;

export interface Course {
  id?: string;
  title: string;
  slug: string;
  mini_desc?: string;
  description?: string;
  image_url?: string;
  is_active?: boolean;
  created_at?: string;
}

export interface CourseVariant {
  id?: string;
  created_at?: string;
  title: string;
  course_id: string;
  price?: number;
  capacity?: number;
  description?: string;
  start_date?: string;
  mini_desc?: string;
  is_featured: boolean;
  is_active?: boolean;
}

export interface CourseWithVariants extends Course {
  course_variants?: CourseVariant[];
}

/**
 * Course Service - Database backed implementation
 */
const courseService = {
  /**
   * Get all courses (without variants)
   */
  get: async (): Promise<Course[]> => {
    const courses = await Course.findAll({
      where: { is_active: true },
      order: [['created_at', 'DESC']],
    });
    return courses.map((c) => toJSON(c.toJSON() as unknown as Course));
  },

  /**
   * Get single course by ID
   */
  getById: async (id: string): Promise<Course> => {
    const course = await Course.findByPk(id);
    if (!course) {
      throw new Error('Course not found');
    }
    return toJSON(course.toJSON() as unknown as Course);
  },

  /**
   * Get variant by ID
   */
  getVariantById: async (id: string): Promise<CourseVariant> => {
    const variant = await CourseVariant.findByPk(id);
    if (!variant) {
      throw new Error('Variant not found');
    }
    return toJSON(variant.toJSON() as unknown as CourseVariant);
  },

  /**
   * Get course by ID with variants
   */
  getByIdWithVariants: async (id: string): Promise<CourseWithVariants> => {
    const course = await Course.findOne({
      where: { id, is_active: true },
      include: [
        {
          model: CourseVariant,
          as: 'course_variants',
          where: { is_active: true },
          required: false,
        },
      ],
    });

    if (!course) {
      throw new Error('Course not found');
    }

    const data = toJSON(course.toJSON() as unknown as CourseWithVariants);

    // Sort variants: featured first, then by creation date
    if (data.course_variants) {
      data.course_variants.sort((a, b) => {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        return 0;
      });
    }

    return data;
  },

  /**
   * Get course by slug with variants
   */
  getBySlug: async (slug: string): Promise<CourseWithVariants> => {
    const course = await Course.findOne({
      where: { slug, is_active: true },
      include: [
        {
          model: CourseVariant,
          as: 'course_variants',
          where: { is_active: true },
          required: false,
        },
      ],
    });

    if (!course) {
      throw new Error('Course not found');
    }

    const data = toJSON(course.toJSON() as unknown as CourseWithVariants);

    // Sort variants: featured first, then by creation date
    if (data.course_variants) {
      data.course_variants.sort((a, b) => {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        return 0;
      });
    }

    return data;
  },

  /**
   * Get all courses with variants (for admin or listing page)
   */
  getAllWithVariants: async (): Promise<CourseWithVariants[]> => {
    const courses = await Course.findAll({
      include: [
        {
          model: CourseVariant,
          as: 'course_variants',
          required: false,
        },
      ],
      order: [['created_at', 'DESC']],
    });

    return courses.map((c) => {
      const data = c.toJSON() as CourseWithVariants;
      if (data.course_variants) {
        data.course_variants.sort((a, b) => {
          if (a.is_featured && !b.is_featured) return -1;
          if (!a.is_featured && b.is_featured) return 1;
          return 0;
        });
      }
      return data;
    });
  },

  /**
   * Create new course
   */
  post: async (data: Omit<Course, 'id' | 'created_at'>): Promise<Course> => {
    const course = await Course.create(data as any);
    return toJSON(course.toJSON() as unknown as Course);
  },

  /**
   * Update course
   */
  put: async (id: string, data: Partial<Omit<Course, 'id' | 'created_at'>>): Promise<Course> => {
    const course = await Course.findByPk(id);
    if (!course) {
      throw new Error('Course not found');
    }
    await course.update(data as any);
    return toJSON(course.toJSON() as unknown as Course);
  },

  /**
   * Delete course
   */
  delete: async (id: string): Promise<void> => {
    const course = await Course.findByPk(id);
    if (!course) {
      throw new Error('Course not found');
    }
    await course.destroy();
  },

  /**
   * Course Variant operations
   */

  /**
   * Create variant for a course
   */
  createVariant: async (courseId: string, data: Omit<CourseVariant, 'id' | 'course_id' | 'created_at'>): Promise<CourseVariant> => {
    const course = await Course.findByPk(courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    const variant = await (course as any).createVariant(data as any);
    return toJSON(variant.toJSON() as unknown as unknown as CourseVariant);
  },

  /**
   * Update variant
   */
  updateVariant: async (variantId: string, data: Partial<Omit<CourseVariant, 'id' | 'course_id' | 'created_at'>>): Promise<CourseVariant> => {
    const variant = await CourseVariant.findByPk(variantId);
    if (!variant) {
      throw new Error('Course variant not found');
    }
    await variant.update(data as any);
    return toJSON(variant.toJSON() as unknown as CourseVariant);
  },

  /**
   * Delete variant
   */
  deleteVariant: async (variantId: string): Promise<void> => {
    const variant = await CourseVariant.findByPk(variantId);
    if (!variant) {
      throw new Error('Course variant not found');
    }
    await variant.destroy();
  },
};

export default courseService;
