import models from '../models';
import type { ContactFormStatus } from '../models/ContactForm';
import { toJSON } from '../lib/serialize';

const { ContactForm } = models;

export interface ContactForm {
  id?: number;
  fullname: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  terms_accepted?: boolean;
  status?: ContactFormStatus;
  ip_address?: string;
  user_agent?: string;
  created_at?: string;
}

export interface InsertContactForm {
  fullname: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

/**
 * Contact Form Service - Database backed implementation
 */
const contactFormService = {
  /**
   * Create new contact form submission
   */
  post: async (data: InsertContactForm, metadata?: { ip_address?: string; user_agent?: string }): Promise<ContactForm> => {
    const contactForm = await ContactForm.create({
      ...data,
      terms_accepted: true,
      status: 'pending',
      ...metadata,
    } as any);

    return toJSON(contactForm.toJSON() as unknown as ContactForm);
  },

  /**
   * Get all contact forms (for admin)
   */
  get: async (): Promise<ContactForm[]> => {
    const contactForms = await ContactForm.findAll({
      order: [['created_at', 'DESC']],
    });
    return contactForms.map((c) => toJSON(c.toJSON() as unknown as ContactForm));
  },

  /**
   * Get single contact form by ID
   */
  getById: async (id: number): Promise<ContactForm> => {
    const contactForm = await ContactForm.findByPk(id);
    if (!contactForm) {
      throw new Error('Contact form submission not found');
    }
    return toJSON(contactForm.toJSON() as unknown as ContactForm);
  },

  /**
   * Update contact form status
   */
  updateStatus: async (id: number, status: ContactFormStatus): Promise<ContactForm> => {
    const contactForm = await ContactForm.findByPk(id);
    if (!contactForm) {
      throw new Error('Contact form submission not found');
    }
    await contactForm.update({ status } as any);
    return toJSON(contactForm.toJSON() as unknown as ContactForm);
  },

  /**
   * Delete contact form submission
   */
  delete: async (id: number): Promise<void> => {
    const contactForm = await ContactForm.findByPk(id);
    if (!contactForm) {
      throw new Error('Contact form submission not found');
    }
    await contactForm.destroy();
  },

  /**
   * Get contact forms by status
   */
  getByStatus: async (status: ContactFormStatus): Promise<ContactForm[]> => {
    const contactForms = await ContactForm.findAll({
      where: { status },
      order: [['created_at', 'DESC']],
    });
    return contactForms.map((c) => toJSON(c.toJSON() as unknown as ContactForm));
  },

  /**
   * Get contact forms statistics
   */
  getStats: async (): Promise<{
    total: number;
    pending: number;
    read: number;
    replied: number;
    archived: number;
  }> => {
    const total = await ContactForm.count();
    const pending = await ContactForm.count({ where: { status: 'pending' } });
    const read = await ContactForm.count({ where: { status: 'read' } });
    const replied = await ContactForm.count({ where: { status: 'replied' } });
    const archived = await ContactForm.count({ where: { status: 'archived' } });

    return { total, pending, read, replied, archived };
  },
};

export default contactFormService;
