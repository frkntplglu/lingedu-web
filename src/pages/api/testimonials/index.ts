import type { NextApiRequest, NextApiResponse } from 'next';
import testimonialService from '@/services/testimonialService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';
import { validateRequest, testimonialSchema } from '@/lib/validation/schemas';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      // Return only active testimonials for public use
      const testimonials = await testimonialService.get();
      return sendSuccess(res, testimonials, 'Testimonials retrieved successfully');

    case 'POST': {
      // Create new testimonial (admin only)
      const validatedData = await validateRequest(testimonialSchema, req.body);
      // Convert null to undefined for service compatibility
      const sanitizedData = {
        ...validatedData,
        comment: validatedData.comment ?? undefined,
        client_job: validatedData.client_job ?? undefined,
        rating: validatedData.rating ?? undefined,
      };
      const newTestimonial = await testimonialService.post(sanitizedData);
      return sendSuccess(res, newTestimonial, 'Testimonial created successfully', 201);
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return errorResponses.methodNotAllowed(res);
  }
});
