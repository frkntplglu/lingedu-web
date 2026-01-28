/**
 * Application Bootstrap / Entrypoint
 * 
 * This module initializes all application services and dependencies.
 * Add new initializers here as the application grows.
 */

import logger from '../logger';
import { initDatabase, closeDatabase } from './database';

const log = logger.child('Bootstrap');

export interface InitOptions {
    database?: boolean;
    // Add more options as needed
    // redis?: boolean;
    // cache?: boolean;
    // queue?: boolean;
}

const defaultOptions: InitOptions = {
    database: true,
};

let isInitialized = false;

/**
 * Initialize all application services
 */
export async function bootstrap(options: InitOptions = defaultOptions): Promise<void> {
    if (isInitialized) {
        log.warn('Application already initialized');
        return;
    }

    log.info('Starting application bootstrap...');
    const endTimer = logger.time('Bootstrap');

    try {
        // Initialize database
        if (options.database) {
            await initDatabase();
        }

        // Add more initializers here as needed:
        // if (options.redis) {
        //   await initRedis();
        // }
        // if (options.cache) {
        //   await initCache();
        // }
        // if (options.queue) {
        //   await initQueue();
        // }

        isInitialized = true;
        endTimer();
    } catch (error) {
        log.error('Application bootstrap failed', error);
        throw error;
    }
}

/**
 * Gracefully shutdown all services
 */
export async function shutdown(): Promise<void> {
    log.info('Shutting down application...');

    try {
        await closeDatabase();

        // Add more cleanup here:
        // await closeRedis();
        // await closeCache();
        // await closeQueue();

        isInitialized = false;
        log.info('Application shutdown completed');
    } catch (error) {
        log.error('Error during shutdown', error);
        throw error;
    }
}

/**
 * Check if application is initialized
 */
export function isAppInitialized(): boolean {
    return isInitialized;
}

// Re-export individual initializers for granular control
export { initDatabase, closeDatabase } from './database';

export default {
    bootstrap,
    shutdown,
    isInitialized: isAppInitialized,
};
