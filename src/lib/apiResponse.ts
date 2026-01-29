import type { NextApiRequest, NextApiResponse } from 'next';

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data: T;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    code?: string;
    details?: unknown;
  };
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;

/**
 * Send a successful API response
 */
export function sendSuccess<T>(
  res: NextApiResponse,
  data: T,
  message?: string,
  statusCode: number = 200
): void {
  res.status(statusCode).json({
    success: true,
    data,
    ...(message && { message }),
  } as ApiSuccessResponse<T>);
}

/**
 * Send an error API response
 */
export function sendError(
  res: NextApiResponse,
  message: string,
  statusCode: number = 500,
  code?: string,
  details?: unknown
): void {
  const error: ApiErrorResponse['error'] = { message };
  if (code) error.code = code;
  if (details) error.details = details;

  res.status(statusCode).json({
    success: false,
    error,
  } as ApiErrorResponse);
}

/**
 * Common error responses
 */
export const errorResponses = {
  badRequest: (res: NextApiResponse, message: string = 'Bad request', details?: unknown) =>
    sendError(res, message, 400, 'BAD_REQUEST', details),

  unauthorized: (res: NextApiResponse, message: string = 'Unauthorized') =>
    sendError(res, message, 401, 'UNAUTHORIZED'),

  forbidden: (res: NextApiResponse, message: string = 'Forbidden') =>
    sendError(res, message, 403, 'FORBIDDEN'),

  notFound: (res: NextApiResponse, message: string = 'Resource not found') =>
    sendError(res, message, 404, 'NOT_FOUND'),

  methodNotAllowed: (res: NextApiResponse, message: string = 'Method not allowed') =>
    sendError(res, message, 405, 'METHOD_NOT_ALLOWED'),

  conflict: (res: NextApiResponse, message: string = 'Resource already exists') =>
    sendError(res, message, 409, 'CONFLICT'),

  unprocessable: (res: NextApiResponse, message: string = 'Validation failed', details?: unknown) =>
    sendError(res, message, 422, 'UNPROCESSABLE_ENTITY', details),

  internal: (res: NextApiResponse, message: string = 'Internal server error') =>
    sendError(res, message, 500, 'INTERNAL_ERROR'),
};

/**
 * Wrap async route handlers to catch errors
 */
export function asyncHandler(
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
): (req: NextApiRequest, res: NextApiResponse) => Promise<void> {
  return async (req, res) => {
    try {
      await fn(req, res);
    } catch (error) {
      console.error('API Error:', error);
      if (error instanceof Error) {
        errorResponses.internal(res, error.message);
      } else {
        errorResponses.internal(res, 'An unexpected error occurred');
      }
    }
  };
}
