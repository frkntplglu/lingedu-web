import type { NextApiRequest, NextApiResponse } from 'next';
import courseService from '@/services/courseService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return errorResponses.methodNotAllowed(res);
  }

  const { slug } = req.query;
  const courseSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!courseSlug) {
    return errorResponses.badRequest(res, 'Slug is required');
  }

  try {
    const course = await courseService.getBySlug(courseSlug);
    return sendSuccess(res, course, 'Course retrieved successfully');
  } catch (error) {
    return errorResponses.notFound(res, 'Course not found');
  }
});
