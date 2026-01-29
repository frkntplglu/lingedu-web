import type { NextApiRequest, NextApiResponse } from 'next';
import contactFormService from '@/services/contactFormService';
import { sendSuccess, errorResponses, asyncHandler } from '@/lib/apiResponse';
import { validateRequest, contactFormSchema } from '@/lib/validation/schemas';

export default asyncHandler(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      // Get all contact form submissions (admin only)
      const forms = await contactFormService.get();
      return sendSuccess(res, forms, 'Contact forms retrieved successfully');

    case 'POST': {
      // Submit new contact form
      const validatedData = await validateRequest(contactFormSchema, req.body);

      // Convert null to undefined for service compatibility
      const sanitizedData = {
        ...validatedData,
        phone: validatedData.phone ?? undefined,
        subject: validatedData.subject ?? undefined,
      };

      // Extract metadata from request
      const metadata = {
        ip_address: (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
                     req.socket.remoteAddress,
        user_agent: req.headers['user-agent'],
      };

      const newForm = await contactFormService.post(sanitizedData, metadata);
      return sendSuccess(res, newForm, 'Contact form submitted successfully', 201);
    }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return errorResponses.methodNotAllowed(res);
  }
});
