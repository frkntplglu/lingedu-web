import type { NextApiRequest, NextApiResponse } from 'next';
import { mockTestimonials, type Testimonial } from './index';

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Testimonial | null>>
) {
  const { id } = req.query;
  const testimonialId = Number(Array.isArray(id) ? id[0] : id);
  
  const testimonialIndex = mockTestimonials.findIndex(t => t.id === testimonialId);
  
  if (testimonialIndex === -1) {
    return res.status(404).json({ success: false, error: 'Testimonial not found' });
  }

  switch (req.method) {
    case 'GET':
      return res.status(200).json({ success: true, data: mockTestimonials[testimonialIndex] });

    case 'PUT':
      // Update testimonial
      const { client_fullname, client_job, comment, is_active } = req.body;
      
      mockTestimonials[testimonialIndex] = {
        ...mockTestimonials[testimonialIndex],
        ...(client_fullname && { client_fullname }),
        ...(client_job && { client_job }),
        ...(comment && { comment }),
        ...(is_active !== undefined && { is_active }),
      };
      
      return res.status(200).json({ success: true, data: mockTestimonials[testimonialIndex] });

    case 'DELETE':
      mockTestimonials.splice(testimonialIndex, 1);
      return res.status(200).json({ success: true, data: null });

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
