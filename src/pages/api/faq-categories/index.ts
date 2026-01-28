import type { NextApiRequest, NextApiResponse } from 'next';
import { mockCategories, type FAQCategory } from '../faqs/index';

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FAQCategory[]>>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  return res.status(200).json({ success: true, data: mockCategories });
}
