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

// Mock storage for contact form submissions
const mockContactForms: ContactForm[] = [];

// Simulate async delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const contactFormService = {
  // Create new contact form submission (mock - logs to console and stores in memory)
  post: async (data: InsertContactForm): Promise<ContactForm> => {
    await delay(500);
    
    const newContactForm: ContactForm = {
      ...data,
      id: mockContactForms.length + 1,
      terms_accepted: true,
      created_at: new Date().toISOString(),
    };
    
    mockContactForms.push(newContactForm);
    
    // Log the submission for development purposes
    console.log('Contact form submitted:', newContactForm);
    
    return newContactForm;
  },

  // Get all contact forms (for admin purposes - mock)
  get: async (): Promise<ContactForm[]> => {
    await delay(300);
    return mockContactForms;
  },
};

export default contactFormService;
