import next from 'next';
import { createServer } from 'http';
import { parse } from 'url';
import logger from './lib/logger';
import { bootstrap, shutdown } from './lib/init';

// Initialize logger
logger.init();

// Set timezone
process.env.TZ = 'Europe/Istanbul';

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.SERVER_HOST || 'localhost';
const port = parseInt(process.env.SERVER_PORT || '3000', 10);

const app = next({ hostname, port, dev });
const handler = app.getRequestHandler();

logger.info('App Starting...', { 
  env: process.env.NODE_ENV || 'development',
  hostname,
  port,
});

app
  .prepare()
  .then(async () => {
    logger.info('Next.js app prepared');
    
    // Initialize all services (database, etc.)
    const initTimer = logger.time('Services initialization');
    await bootstrap({ database: true });
    initTimer();
  })
  .then(() => {
    const server = createServer((req, res) => {
      const parsedUrl = parse(req.url!, true);
      handler(req, res, parsedUrl);
    });

    server.listen({ host: hostname, port }, () => {
      logger.info(`Server listening at http://${hostname}:${port}`, {
        mode: dev ? 'development' : 'production',
      });
    });

    // Handle server errors
    server.on('error', (error: NodeJS.ErrnoException) => {
      if (error.code === 'EADDRINUSE') {
        logger.error(`Port ${port} is already in use`, error);
      } else {
        logger.error('Server error', error);
      }
      process.exit(1);
    });
  })
  .catch(async (err) => {
    logger.error('App failed to start', err);
    await shutdown();
    process.exit(1);
  });

// Graceful shutdown handlers
const gracefulShutdown = async (signal: string) => {
  logger.info(`App Stopping... (Received ${signal})`);
  
  try {
    await shutdown();
    logger.info('Graceful shutdown completed');
    process.exit(0);
  } catch (error) {
    logger.error('Error during shutdown', error);
    process.exit(1);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection', reason as Error, { promise: String(promise) });
});
