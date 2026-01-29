import type { NextApiRequest, NextApiResponse } from 'next';
import faqService from '@/services/faqService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';
import { validateRequest, faqSchema } from '@/lib/validation/schemas';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const faqId = Number(Array.isArray(id) ? id[0] : id);

  if (isNaN(faqId)) {
    return errorResponses.badRequest(res, 'Invalid FAQ ID');
  }

  switch (req.method) {
    case 'GET':
      try {
        const faq = await faqService.getById(faqId);
        return sendSuccess(res, faq, 'FAQ retrieved successfully');
      } catch (error) {
        return errorResponses.notFound(res, 'FAQ not found');
      }

    case 'PUT': {
      const validatedData = await validateRequest(faqSchema.partial(), req.body);
      try {
        // Convert null to undefined for service compatibility
        const sanitizedData = {
          ...validatedData,
          answer: validatedData.answer ?? undefined,
          category_id: validatedData.category_id ?? undefined,
        };
        const updatedFaq = await faqService.put(faqId, sanitizedData);
        return sendSuccess(res, updatedFaq, 'FAQ updated successfully');
      } catch (error) {
        return errorResponses.notFound(res, 'FAQ not found');
      }
    }

    case 'DELETE':
      try {
        await faqService.delete(faqId);
        return sendSuccess(res, null, 'FAQ deleted successfully');
      } catch (error) {
        return errorResponses.notFound(res, 'FAQ not found');
      }

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return errorResponses.methodNotAllowed(res);
  }
});
