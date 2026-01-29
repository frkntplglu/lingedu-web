import type { NextApiRequest, NextApiResponse } from 'next';
import courseService from '@/services/courseService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';
import { validateRequest, courseSchema } from '@/lib/validation/schemas';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const courseId = Array.isArray(id) ? id[0] : id;

  if (!courseId) {
    return errorResponses.badRequest(res, 'Invalid course ID');
  }

  switch (req.method) {
    case 'GET':
      try {
        const course = await courseService.getById(courseId);
        return sendSuccess(res, course, 'Course retrieved successfully');
      } catch (error) {
        return errorResponses.notFound(res, 'Course not found');
      }

    case 'PUT': {
      const validatedData = await validateRequest(courseSchema.partial(), req.body);
      try {
        // Convert null to undefined for service compatibility
        const sanitizedData = {
          ...validatedData,
          mini_desc: validatedData.mini_desc ?? undefined,
          description: validatedData.description ?? undefined,
        };
        const updatedCourse = await courseService.put(courseId, sanitizedData);
        return sendSuccess(res, updatedCourse, 'Course updated successfully');
      } catch (error) {
        return errorResponses.notFound(res, 'Course not found');
      }
    }

    case 'DELETE':
      try {
        await courseService.delete(courseId);
        return sendSuccess(res, null, 'Course deleted successfully');
      } catch (error) {
        return errorResponses.notFound(res, 'Course not found');
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return errorResponses.methodNotAllowed(res);
  }
});
