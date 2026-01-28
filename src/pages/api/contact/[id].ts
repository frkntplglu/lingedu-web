import type { NextApiRequest, NextApiResponse } from 'next';
import { mockContactForms, type ContactForm } from './index';

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<ContactForm | null>>
) {
  const { id } = req.query;
  const contactId = Number(Array.isArray(id) ? id[0] : id);
  
  const contactIndex = mockContactForms.findIndex(c => c.id === contactId);
  
  if (contactIndex === -1) {
    return res.status(404).json({ success: false, error: 'Contact form not found' });
  }

  switch (req.method) {
    case 'GET':
      return res.status(200).json({ success: true, data: mockContactForms[contactIndex] });

    case 'DELETE':
      mockContactForms.splice(contactIndex, 1);
      return res.status(200).json({ success: true, data: null });

    default:
      res.setHeader('Allow', ['GET', 'DELETE']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
