/**
 * API Middleware for ensuring services are initialized
 */

import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { initDatabase, isDatabaseConnected } from './database';

/**
 * Middleware to ensure database is connected before handling API requests
 */
export function withDatabase(handler: NextApiHandler): NextApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (!isDatabaseConnected()) {
        await initDatabase({ sync: false });
      }
      return handler(req, res);
    } catch (error) {
      console.error('Database connection error:', error);
      return res.status(500).json({
        success: false,
        error: 'Database connection failed',
      });
    }
  };
}

/**
 * Compose multiple middlewares
 */
export function composeMiddleware(
  ...middlewares: Array<(handler: NextApiHandler) => NextApiHandler>
): (handler: NextApiHandler) => NextApiHandler {
  return (handler: NextApiHandler) => {
    return middlewares.reduceRight((acc, middleware) => middleware(acc), handler);
  };
}

/**
 * Rate limiting middleware (placeholder for future implementation)
 */
export function withRateLimit(
  options: { maxRequests?: number; windowMs?: number } = {}
): (handler: NextApiHandler) => NextApiHandler {
  const { maxRequests = 100, windowMs = 60000 } = options;
  const requests = new Map<string, { count: number; resetTime: number }>();

  return (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
                 req.socket.remoteAddress || 
                 'unknown';
      
      const now = Date.now();
      const requestData = requests.get(ip);

      if (requestData) {
        if (now > requestData.resetTime) {
          requests.set(ip, { count: 1, resetTime: now + windowMs });
        } else if (requestData.count >= maxRequests) {
          return res.status(429).json({
            success: false,
            error: 'Too many requests, please try again later',
          });
        } else {
          requestData.count++;
        }
      } else {
        requests.set(ip, { count: 1, resetTime: now + windowMs });
      }

      return handler(req, res);
    };
  };
}

/**
 * CORS middleware
 */
export function withCors(
  options: { origin?: string | string[]; methods?: string[] } = {}
): (handler: NextApiHandler) => NextApiHandler {
  const { 
    origin = '*', 
    methods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] 
  } = options;

  return (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const originHeader = Array.isArray(origin) ? origin.join(', ') : origin;
      
      res.setHeader('Access-Control-Allow-Origin', originHeader);
      res.setHeader('Access-Control-Allow-Methods', methods.join(', '));
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

      if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }

      return handler(req, res);
    };
  };
}

export default {
  withDatabase,
  withRateLimit,
  withCors,
  composeMiddleware,
};
