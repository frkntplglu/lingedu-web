import models from '../models';
import { toJSON } from '../lib/serialize';

const { FAQ, FAQCategory } = models;

export interface FAQCategory {
  id?: number;
  name: string;
  slug?: string;
  sort_order?: number;
  is_active?: boolean;
  created_at?: string;
}

export interface FAQ {
  id?: number;
  question: string;
  answer: string;
  category_id?: number;
  sort_order?: number;
  is_active?: boolean;
  created_at?: string;
}

export interface FAQWithCategory extends FAQ {
  faq_categories?: FAQCategory;
}

/**
 * FAQ Service - Database backed implementation
 */
const faqService = {
  /**
   * Get all FAQs with categories
   */
  get: async (includeInactive: boolean = false): Promise<FAQWithCategory[]> => {
    const where = includeInactive ? {} : { is_active: true };

    const faqs = await FAQ.findAll({
      where,
      include: [
        {
          model: FAQCategory,
          as: 'faq_categories',
          required: false,
        },
      ],
      order: [
        ['sort_order', 'ASC'],
        ['created_at', 'DESC'],
      ],
    });

    return faqs.map((f) => toJSON(f.toJSON() as unknown as FAQWithCategory));
  },

  /**
   * Get all FAQ categories
   */
  getCategories: async (includeInactive: boolean = false): Promise<FAQCategory[]> => {
    const where = includeInactive ? {} : { is_active: true };

    const categories = await FAQCategory.findAll({
      where,
      order: [
        ['sort_order', 'ASC'],
        ['name', 'ASC'],
      ],
    });

    return categories.map((c) => toJSON(c.toJSON() as unknown as FAQCategory));
  },

  /**
   * Get single FAQ by ID
   */
  getById: async (id: number): Promise<FAQWithCategory> => {
    const faq = await FAQ.findByPk(id, {
      include: [
        {
          model: FAQCategory,
          as: 'faq_categories',
          required: false,
        },
      ],
    });

    if (!faq) {
      throw new Error('FAQ not found');
    }

    return toJSON(faq.toJSON() as unknown as FAQWithCategory);
  },

  /**
   * Get FAQs by category
   */
  getByCategory: async (categoryId: number): Promise<FAQWithCategory[]> => {
    const faqs = await FAQ.findAll({
      where: {
        category_id: categoryId,
        is_active: true,
      },
      include: [
        {
          model: FAQCategory,
          as: 'faq_categories',
          required: false,
        },
      ],
      order: [
        ['sort_order', 'ASC'],
        ['created_at', 'DESC'],
      ],
    });

    return faqs.map((f) => toJSON(f.toJSON() as unknown as FAQWithCategory));
  },

  /**
   * Create new FAQ
   */
  post: async (data: Omit<FAQ, 'id' | 'created_at'>): Promise<FAQ> => {
    const faq = await FAQ.create(data as any);
    return toJSON(faq.toJSON() as unknown as FAQ);
  },

  /**
   * Update FAQ
   */
  put: async (id: number, data: Partial<Omit<FAQ, 'id' | 'created_at'>>): Promise<FAQ> => {
    const faq = await FAQ.findByPk(id);
    if (!faq) {
      throw new Error('FAQ not found');
    }
    await faq.update(data as any);
    return toJSON(faq.toJSON() as unknown as FAQ);
  },

  /**
   * Delete FAQ
   */
  delete: async (id: number): Promise<void> => {
    const faq = await FAQ.findByPk(id);
    if (!faq) {
      throw new Error('FAQ not found');
    }
    await faq.destroy();
  },

  /**
   * Category operations
   */

  /**
   * Create category
   */
  createCategory: async (data: Omit<FAQCategory, 'id' | 'created_at'>): Promise<FAQCategory> => {
    const category = await FAQCategory.create(data as any);
    return toJSON(category.toJSON() as unknown as FAQCategory);
  },

  /**
   * Update category
   */
  updateCategory: async (id: number, data: Partial<Omit<FAQCategory, 'id' | 'created_at'>>): Promise<FAQCategory> => {
    const category = await FAQCategory.findByPk(id);
    if (!category) {
      throw new Error('FAQ category not found');
    }
    await category.update(data as any);
    return toJSON(category.toJSON() as unknown as FAQCategory);
  },

  /**
   * Delete category
   */
  deleteCategory: async (id: number): Promise<void> => {
    const category = await FAQCategory.findByPk(id);
    if (!category) {
      throw new Error('FAQ category not found');
    }
    await category.destroy();
  },

  /**
   * Get FAQs grouped by category
   */
  getByGroupedCategory: async (): Promise<Record<string, FAQ[]>> => {
    const faqs = await FAQ.findAll({
      where: { is_active: true },
      include: [
        {
          model: FAQCategory,
          as: 'faq_categories',
          where: { is_active: true },
          required: false,
        },
      ],
      order: [
        ['sort_order', 'ASC'],
        ['created_at', 'DESC'],
      ],
    });

    const grouped: Record<string, FAQ[]> = {};

    faqs.forEach((faq) => {
      const faqData = toJSON(faq.toJSON() as unknown as FAQWithCategory);
      const categoryName = faqData.faq_categories?.name || 'Uncategorized';

      if (!grouped[categoryName]) {
        grouped[categoryName] = [];
      }

      grouped[categoryName].push(faqData as FAQ);
    });

    return grouped;
  },
};

export default faqService;
