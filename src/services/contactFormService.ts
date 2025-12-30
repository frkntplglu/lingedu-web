import { supabase } from "@/lib/supabase/supabase";

export interface ContactForm {
  id?: number;
  fullname: string;
  email: string;
  subject: string;
  message: string;
  terms_accepted: boolean;
  created_at?: string;
}

export interface InsertContactForm {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

const contactFormService = {
  // Create new contact form submission
  post: async (data: InsertContactForm): Promise<ContactForm> => {
    const { data: result, error } = await supabase
      .from('contact_form')
      .insert(data)
      .select()
      .single();

    if (error) throw error;
    return result;
  },
};

export default contactFormService;

