import type { NextApiRequest, NextApiResponse } from 'next';
import faqService from '@/services/faqService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';
import { validateRequest, faqCategorySchema } from '@/lib/validation/schemas';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      const categories = await faqService.getCategories(false);
      return sendSuccess(res, categories, 'FAQ categories retrieved successfully');

    case 'POST': {
      const validatedData = await validateRequest(faqCategorySchema, req.body);
      // Convert null to undefined for service compatibility
      const sanitizedData = {
        ...validatedData,
        slug: validatedData.slug ?? undefined,
      };
      const newCategory = await faqService.createCategory(sanitizedData);
      return sendSuccess(res, newCategory, 'FAQ category created successfully', 201);
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return errorResponses.methodNotAllowed(res);
  }
});
