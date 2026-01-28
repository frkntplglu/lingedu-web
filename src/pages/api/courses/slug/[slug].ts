import type { NextApiRequest, NextApiResponse } from 'next';
import type { CourseWithVariants } from '@/services/courseService';
import { mockCourses } from '../index';

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<CourseWithVariants>>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  const { slug } = req.query;
  const courseSlug = Array.isArray(slug) ? slug[0] : slug;
  
  const course = mockCourses.find(c => c.slug === courseSlug);
  
  if (!course) {
    return res.status(404).json({ success: false, error: 'Course not found' });
  }

  return res.status(200).json({ success: true, data: course });
}
