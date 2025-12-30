import { supabase } from "@/lib/supabase/supabase";

export interface IELTS {
  id?: number;
  title: string;
  mini_desc?: string;
  description?: string;
  price_per_hour?: number;
  stock?: number;
  is_group?: boolean;
  price?: number;
  created_at?: string;
}

const ieltsService = {
  // Get all IELTS courses
  get: async (params?: { isGroup?: boolean }): Promise<IELTS[]> => {
    let query = supabase.from('ielts').select('*');

    if (params?.isGroup !== undefined) {
      query = query.eq('is_group', params.isGroup);
    }

    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  },

  // Get single IELTS course by ID
  getById: async (id: number): Promise<IELTS> => {
    const { data, error } = await supabase
      .from('ielts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Create new IELTS course
  post: async (data: Omit<IELTS, 'id' | 'created_at'>): Promise<IELTS> => {
    const { data: result, error } = await supabase
      .from('ielts')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Update IELTS course
  put: async (id: number, data: Partial<Omit<IELTS, 'id' | 'created_at'>>): Promise<IELTS> => {
    const { data: result, error } = await supabase
      .from('ielts')
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Delete IELTS course
  delete: async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('ielts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

export default ieltsService;

