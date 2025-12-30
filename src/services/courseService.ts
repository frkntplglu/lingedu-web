import { supabase } from "@/lib/supabase/supabase";

export interface Course {
  id?: string;
  title: string;
  slug: string;
  mini_desc?: string;
  description?: string;
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
}

export interface CourseWithVariants extends Course {
  course_variants?: CourseVariant[];
}

const courseService = {
  // Get all courses
  get: async (): Promise<Course[]> => {
    const { data, error } = await supabase
      .from('course')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get single course by ID
  getById: async (id: string): Promise<Course> => {
    const { data, error } = await supabase
      .from('course')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Get course by slug with variants
  getBySlug: async (slug: string): Promise<CourseWithVariants> => {
    const { data, error } = await supabase
      .from('course')
      .select(`
        *,
        course_variants (
          id,
          created_at,
          title,
          course_id,
          price,
          capacity,
          description,
          start_date
        )
      `)
      .eq('slug', slug)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  // Create new course
  post: async (data: Omit<Course, 'id' | 'created_at'>): Promise<Course> => {
    const { data: result, error } = await supabase
      .from('course')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Update course
  put: async (id: string, data: Partial<Omit<Course, 'id' | 'created_at'>>): Promise<Course> => {
    const { data: result, error } = await supabase
      .from('course')
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Delete course
  delete: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('course')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },
};

export default courseService;

