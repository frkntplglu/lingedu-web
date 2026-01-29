import type { NextApiRequest, NextApiResponse } from 'next';
import contactFormService from '@/services/contactFormService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const contactId = Number(Array.isArray(id) ? id[0] : id);

  if (isNaN(contactId)) {
    return errorResponses.badRequest(res, 'Invalid contact form ID');
  }

  switch (req.method) {
    case 'GET':
      try {
        const form = await contactFormService.getById(contactId);
        return sendSuccess(res, form, 'Contact form retrieved successfully');
      } catch (error) {
        return errorResponses.notFound(res, 'Contact form not found');
      }

    case 'DELETE':
      try {
        await contactFormService.delete(contactId);
        return sendSuccess(res, null, 'Contact form deleted successfully');
      } catch (error) {
        return errorResponses.notFound(res, 'Contact form not found');
      }

    default:
      res.setHeader('Allow', ['GET', 'DELETE']);
      return errorResponses.methodNotAllowed(res);
  }
});
