import type { NextApiRequest, NextApiResponse } from 'next';
import type { Course, CourseWithVariants } from '@/services/courseService';
import { mockCourses } from './index';

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Course | CourseWithVariants | null>>
) {
  const { id } = req.query;
  const courseId = Array.isArray(id) ? id[0] : id;
  
  const courseIndex = mockCourses.findIndex(c => c.id === courseId);
  
  if (courseIndex === -1 && req.method !== 'POST') {
    return res.status(404).json({ success: false, error: 'Course not found' });
  }

  switch (req.method) {
    case 'GET':
      // Return course without variants
      const { course_variants, ...courseData } = mockCourses[courseIndex];
      return res.status(200).json({ success: true, data: courseData });

    case 'PUT':
      // Update course
      const { title, slug, mini_desc, description } = req.body;
      
      mockCourses[courseIndex] = {
        ...mockCourses[courseIndex],
        ...(title && { title }),
        ...(slug && { slug }),
        ...(mini_desc && { mini_desc }),
        ...(description && { description }),
      };
      
      return res.status(200).json({ success: true, data: mockCourses[courseIndex] });

    case 'DELETE':
      mockCourses.splice(courseIndex, 1);
      return res.status(200).json({ success: true, data: null });

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
