/**
 * Logger Utility
 * 
 * A simple but powerful logging utility with:
 * - Log levels (debug, info, warn, error)
 * - Colored output
 * - Timestamps
 * - Context support
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerConfig {
  level: LogLevel;
  enableColors: boolean;
  enableTimestamp: boolean;
  prefix?: string;
}

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  
  // Foreground
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  gray: '\x1b[90m',
  
  // Background
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
};

const LEVEL_COLORS: Record<LogLevel, string> = {
  debug: COLORS.gray,
  info: COLORS.cyan,
  warn: COLORS.yellow,
  error: COLORS.red,
};

const LEVEL_ICONS: Record<LogLevel, string> = {
  debug: '🔍',
  info: 'ℹ️ ',
  warn: '⚠️ ',
  error: '❌',
};

class Logger {
  private config: LoggerConfig;
  private context?: string;

  constructor(config?: Partial<LoggerConfig>) {
    this.config = {
      level: (process.env.LOG_LEVEL as LogLevel) || 'info',
      enableColors: process.env.NODE_ENV !== 'production',
      enableTimestamp: true,
      ...config,
    };
  }

  /**
   * Create a child logger with context
   */
  child(context: string): Logger {
    const child = new Logger(this.config);
    child.context = context;
    return child;
  }

  /**
   * Initialize logger (can be extended for external services)
   */
  init(): void {
    this.info('Logger initialized', {
      level: this.config.level,
      colors: this.config.enableColors,
    });
  }

  /**
   * Log a debug message
   */
  debug(message: string, meta?: Record<string, unknown>): void {
    this.log('debug', message, meta);
  }

  /**
   * Log an info message
   */
  info(message: string, meta?: Record<string, unknown>): void {
    this.log('info', message, meta);
  }

  /**
   * Log a warning message
   */
  warn(message: string, meta?: Record<string, unknown>): void {
    this.log('warn', message, meta);
  }

  /**
   * Log an error message
   */
  error(message: string, error?: Error | unknown, meta?: Record<string, unknown>): void {
    const errorMeta: Record<string, unknown> = { ...meta };
    
    if (error instanceof Error) {
      errorMeta.error = {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
    } else if (error) {
      errorMeta.error = error;
    }
    
    this.log('error', message, errorMeta);
  }

  /**
   * Log a message with timing
   */
  time(label: string): () => void {
    const start = Date.now();
    return () => {
      const duration = Date.now() - start;
      this.info(`${label} completed`, { duration: `${duration}ms` });
    };
  }

  /**
   * Log a table (for debugging)
   */
  table(data: Record<string, unknown>[] | Record<string, unknown>): void {
    if (LOG_LEVELS[this.config.level] > LOG_LEVELS.debug) return;
    console.table(data);
  }

  /**
   * Core logging method
   */
  private log(level: LogLevel, message: string, meta?: Record<string, unknown>): void {
    if (LOG_LEVELS[level] < LOG_LEVELS[this.config.level]) {
      return;
    }

    const parts: string[] = [];

    // Timestamp
    if (this.config.enableTimestamp) {
      const timestamp = new Date().toISOString();
      if (this.config.enableColors) {
        parts.push(`${COLORS.gray}[${timestamp}]${COLORS.reset}`);
      } else {
        parts.push(`[${timestamp}]`);
      }
    }

    // Level
    const levelStr = level.toUpperCase().padEnd(5);
    if (this.config.enableColors) {
      parts.push(`${LEVEL_COLORS[level]}${LEVEL_ICONS[level]} ${levelStr}${COLORS.reset}`);
    } else {
      parts.push(`[${levelStr}]`);
    }

    // Context
    if (this.context) {
      if (this.config.enableColors) {
        parts.push(`${COLORS.magenta}[${this.context}]${COLORS.reset}`);
      } else {
        parts.push(`[${this.context}]`);
      }
    }

    // Prefix
    if (this.config.prefix) {
      parts.push(`[${this.config.prefix}]`);
    }

    // Message
    if (this.config.enableColors && level === 'error') {
      parts.push(`${COLORS.bright}${message}${COLORS.reset}`);
    } else {
      parts.push(message);
    }

    // Output
    const output = parts.join(' ');
    
    if (level === 'error') {
      console.error(output);
    } else if (level === 'warn') {
      console.warn(output);
    } else {
      console.log(output);
    }

    // Meta data
    if (meta && Object.keys(meta).length > 0) {
      if (this.config.enableColors) {
        console.log(`${COLORS.dim}${JSON.stringify(meta, null, 2)}${COLORS.reset}`);
      } else {
        console.log(JSON.stringify(meta));
      }
    }
  }
}

// Default logger instance
const logger = new Logger();

export { Logger, logger, LogLevel, LoggerConfig };
export default logger;
