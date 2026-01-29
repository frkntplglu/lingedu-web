import models from '../models';
import { toJSON } from '../lib/serialize';

const { Testimonial } = models;

export interface Testimonial {
  id?: number;
  client_fullname: string;
  client_job?: string;
  comment: string;
  rating?: number;
  is_active?: boolean;
  created_at?: string;
}

/**
 * Testimonial Service - Database backed implementation
 */
const testimonialService = {
  /**
   * Get all active testimonials
   */
  get: async (): Promise<Testimonial[]> => {
    const testimonials = await Testimonial.findAll({
      where: { is_active: true },
      order: [['created_at', 'DESC']],
    });
    return testimonials.map((t) => toJSON(t.toJSON() as unknown as Testimonial));
  },

  /**
   * Get all testimonials (including inactive - for admin)
   */
  getAll: async (): Promise<Testimonial[]> => {
    const testimonials = await Testimonial.findAll({
      order: [['created_at', 'DESC']],
    });
    return testimonials.map((t) => toJSON(t.toJSON() as unknown as Testimonial));
  },

  /**
   * Get single testimonial by ID
   */
  getById: async (id: number): Promise<Testimonial> => {
    const testimonial = await Testimonial.findByPk(id);
    if (!testimonial) {
      throw new Error('Testimonial not found');
    }
    return toJSON(testimonial.toJSON() as unknown as Testimonial);
  },

  /**
   * Create new testimonial
   */
  post: async (data: Omit<Testimonial, 'id' | 'created_at'>): Promise<Testimonial> => {
    const testimonial = await Testimonial.create(data as any);
    return toJSON(testimonial.toJSON() as unknown as Testimonial);
  },

  /**
   * Update testimonial
   */
  put: async (id: number, data: Partial<Omit<Testimonial, 'id' | 'created_at'>>): Promise<Testimonial> => {
    const testimonial = await Testimonial.findByPk(id);
    if (!testimonial) {
      throw new Error('Testimonial not found');
    }
    await testimonial.update(data as any);
    return toJSON(testimonial.toJSON() as unknown as Testimonial);
  },

  /**
   * Delete testimonial
   */
  delete: async (id: number): Promise<void> => {
    const testimonial = await Testimonial.findByPk(id);
    if (!testimonial) {
      throw new Error('Testimonial not found');
    }
    await testimonial.destroy();
  },

  /**
   * Toggle testimonial active status
   */
  toggleActive: async (id: number): Promise<Testimonial> => {
    const testimonial = await Testimonial.findByPk(id);
    if (!testimonial) {
      throw new Error('Testimonial not found');
    }
    await testimonial.update({ is_active: !testimonial.get('is_active') });
    return toJSON(testimonial.toJSON() as unknown as Testimonial);
  },
};

export default testimonialService;
