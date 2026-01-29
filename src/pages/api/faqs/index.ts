import type { NextApiRequest, NextApiResponse } from 'next';
import faqService from '@/services/faqService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';
import { validateRequest, faqSchema } from '@/lib/validation/schemas';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      // Return all FAQs with categories (only active for public)
      const faqs = await faqService.get(false);
      return sendSuccess(res, faqs, 'FAQs retrieved successfully');

    case 'POST': {
      // Create new FAQ (admin only)
      const validatedData = await validateRequest(faqSchema, req.body);
      // Convert null to undefined for service compatibility
      const sanitizedData = {
        ...validatedData,
        answer: validatedData.answer ?? undefined,
        category_id: validatedData.category_id ?? undefined,
      };
      const newFaq = await faqService.post(sanitizedData);
      return sendSuccess(res, newFaq, 'FAQ created successfully', 201);
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return errorResponses.methodNotAllowed(res);
  }
});
