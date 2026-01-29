import type { NextApiRequest, NextApiResponse } from 'next';
import testimonialService from '@/services/testimonialService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';
import { validateRequest, testimonialSchema } from '@/lib/validation/schemas';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const testimonialId = Number(Array.isArray(id) ? id[0] : id);

  if (isNaN(testimonialId)) {
    return errorResponses.badRequest(res, 'Invalid testimonial ID');
  }

  switch (req.method) {
    case 'GET':
      const testimonial = await testimonialService.getById(testimonialId);
      return sendSuccess(res, testimonial, 'Testimonial retrieved successfully');

    case 'PUT': {
      const validatedData = await validateRequest(testimonialSchema.partial(), req.body);
      // Convert null to undefined for service compatibility
      const sanitizedData = {
        ...validatedData,
        comment: validatedData.comment ?? undefined,
        client_job: validatedData.client_job ?? undefined,
        rating: validatedData.rating ?? undefined,
      };
      const updatedTestimonial = await testimonialService.put(testimonialId, sanitizedData);
      return sendSuccess(res, updatedTestimonial, 'Testimonial updated successfully');
    }

    case 'DELETE':
      await testimonialService.delete(testimonialId);
      return sendSuccess(res, null, 'Testimonial deleted successfully');

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return errorResponses.methodNotAllowed(res);
  }
});
