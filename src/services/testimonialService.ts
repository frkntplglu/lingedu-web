import { supabase } from "@/lib/supabase/supabase";

export interface Testimonial {
  id?: number;
  client_fullname: string;
  client_job: string;
  comment: string;
  is_active: boolean;
  created_at?: string;
}

const testimonialService = {
  // Get all testimonials
  get: async (): Promise<Testimonial[]> => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  // Get single testimonial by ID
  getById: async (id: number): Promise<Testimonial> => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create new testimonial
  post: async (data: Omit<Testimonial, 'id' | 'created_at'>): Promise<Testimonial> => {
    const { data: result, error } = await supabase
      .from('testimonials')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Update testimonial
  put: async (id: number, data: Partial<Omit<Testimonial, 'id' | 'created_at'>>): Promise<Testimonial> => {
    const { data: result, error } = await supabase
      .from('testimonials')
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Delete testimonial
  delete: async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

export default testimonialService;

