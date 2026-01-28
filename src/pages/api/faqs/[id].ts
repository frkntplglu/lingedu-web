import type { NextApiRequest, NextApiResponse } from 'next';
import { mockFaqs, mockCategories, type FAQ } from './index';

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FAQ | null>>
) {
  const { id } = req.query;
  const faqId = Number(Array.isArray(id) ? id[0] : id);
  
  const faqIndex = mockFaqs.findIndex(f => f.id === faqId);
  
  if (faqIndex === -1) {
    return res.status(404).json({ success: false, error: 'FAQ not found' });
  }

  switch (req.method) {
    case 'GET':
      return res.status(200).json({ success: true, data: mockFaqs[faqIndex] });

    case 'PUT':
      // Update FAQ
      const { question, answer, category_id } = req.body;
      
      const category = category_id ? mockCategories.find(c => c.id === category_id) : mockFaqs[faqIndex].faq_categories;
      
      mockFaqs[faqIndex] = {
        ...mockFaqs[faqIndex],
        ...(question && { question }),
        ...(answer && { answer }),
        ...(category_id && { category_id }),
        faq_categories: category,
      };
      
      return res.status(200).json({ success: true, data: mockFaqs[faqIndex] });

    case 'DELETE':
      mockFaqs.splice(faqIndex, 1);
      return res.status(200).json({ success: true, data: null });

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
