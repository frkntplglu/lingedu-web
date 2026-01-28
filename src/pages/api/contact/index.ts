import type { NextApiRequest, NextApiResponse } from 'next';

export interface ContactForm {
  id?: number;
  fullname: string;
  email: string;
  subject: string;
  message: string;
  terms_accepted: boolean;
  created_at?: string;
}

// Mock storage for contact form submissions
const mockContactForms: ContactForm[] = [];

export { mockContactForms };

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<ContactForm[] | ContactForm>>
) {
  switch (req.method) {
    case 'GET':
      // Return all contact form submissions (for admin)
      return res.status(200).json({ success: true, data: mockContactForms });

    case 'POST':
      // Submit new contact form
      const { fullname, email, subject, message } = req.body;
      
      if (!fullname || !email || !message) {
        return res.status(400).json({ success: false, error: 'Fullname, email, and message are required' });
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: 'Invalid email format' });
      }

      const newContactForm: ContactForm = {
        id: mockContactForms.length + 1,
        fullname,
        email,
        subject: subject || 'Genel',
        message,
        terms_accepted: true,
        created_at: new Date().toISOString(),
      };
      
      mockContactForms.push(newContactForm);
      
      // Log the submission
      console.log('New contact form submission:', newContactForm);
      
      return res.status(201).json({ success: true, data: newContactForm });

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
