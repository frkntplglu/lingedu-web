import { supabase } from "@/lib/supabase/supabase";

export interface SpeakingClub {
  id?: number;
  title: string;
  slug: string;
  mini_desc?: string;
  description?: string;
  price?: number;
  created_at?: string;
}

export interface SpeakingClubSlot {
  id?: number;
  speaking_club_id: number;
  title: string;
  stock?: number;
  lesson_time?: string;
  created_at?: string;
}

const speakingClubService = {
  // Get all speaking clubs
  get: async (): Promise<SpeakingClub[]> => {
    const { data, error } = await supabase
      .from('speaking_club')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get single speaking club by ID
  getById: async (id: number): Promise<SpeakingClub> => {
    const { data, error } = await supabase
      .from('speaking_club')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Get speaking club by slug
  getBySlug: async (slug: string): Promise<SpeakingClub> => {
    const { data, error } = await supabase
      .from('speaking_club')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  },

  // Create new speaking club
  post: async (data: Omit<SpeakingClub, 'id' | 'created_at'>): Promise<SpeakingClub> => {
    const { data: result, error } = await supabase
      .from('speaking_club')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Update speaking club
  put: async (id: number, data: Partial<Omit<SpeakingClub, 'id' | 'created_at'>>): Promise<SpeakingClub> => {
    const { data: result, error } = await supabase
      .from('speaking_club')
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return result;
  },

  // Delete speaking club
  delete: async (id: number): Promise<void> => {
    const { error } = await supabase
      .from('speaking_club')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  // Get slots for a speaking club
  getSlots: async (speakingClubId: number): Promise<SpeakingClubSlot[]> => {
    const { data, error } = await supabase
      .from('speaking_club_slots')
      .select('*')
      .eq('speaking_club_id', speakingClubId)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  // Create slot for a speaking club
  createSlot: async (data: Omit<SpeakingClubSlot, 'id' | 'created_at'>): Promise<SpeakingClubSlot> => {
    const { data: result, error } = await supabase
      .from('speaking_club_slots')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return result;
  },
};

export default speakingClubService;

