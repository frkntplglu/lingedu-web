import type { NextApiRequest, NextApiResponse } from 'next';
import courseService from '@/services/courseService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';
import { validateRequest, courseSchema } from '@/lib/validation/schemas';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      // Return all courses without variants
      const courses = await courseService.get();
      return sendSuccess(res, courses, 'Courses retrieved successfully');

    case 'POST': {
      // Create new course (admin only)
      const validatedData = await validateRequest(courseSchema, req.body);
      // Convert null to undefined for service compatibility
      const sanitizedData = {
        ...validatedData,
        mini_desc: validatedData.mini_desc ?? undefined,
        description: validatedData.description ?? undefined,
      };
      const newCourse = await courseService.post(sanitizedData);
      return sendSuccess(res, newCourse, 'Course created successfully', 201);
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return errorResponses.methodNotAllowed(res);
  }
});
