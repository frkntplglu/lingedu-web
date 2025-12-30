import { supabase } from "@/lib/supabase/supabase";


export interface FAQ {
  id?: number;
  question: string;
  answer: string;
  created_at?: string;
}

const faqService = {
  // Get all FAQs
  get: async (): Promise<FAQ[]> => {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get single FAQ by ID
  getById: async (id: number): Promise<FAQ> => {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create new FAQ
  post: async (data: Omit<FAQ, 'id' | 'created_at'>): Promise<FAQ> => {
    const { data: result, error } = await supabase
      .from('faqs')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Update FAQ
  put: async (id: number, data: Partial<Omit<FAQ, 'id' | 'created_at'>>): Promise<FAQ> => {
    const { data: result, error } = await supabase
      .from('faqs')
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Delete FAQ
  delete: async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('faqs')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

export default faqService;

