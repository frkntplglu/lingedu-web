#!/usr/bin/env npx ts-node

/**
 * Database Initialization Script
 * 
 * Usage:
 *   npx ts-node scripts/db-init.ts           # Initialize without sync
 *   npx ts-node scripts/db-init.ts --sync    # Sync models
 *   npx ts-node scripts/db-init.ts --seed    # Sync and seed
 *   npx ts-node scripts/db-init.ts --force   # Force sync (drops tables!)
 */

import { bootstrap, shutdown } from '../src/lib/init';

async function main() {
  const args = process.argv.slice(2);
  
  const options = {
    sync: args.includes('--sync') || args.includes('--seed') || args.includes('--force'),
    force: args.includes('--force'),
    seed: args.includes('--seed'),
  };

  console.log('📋 Database initialization options:', options);
  console.log('');

  if (options.force) {
    console.log('⚠️  WARNING: Force mode enabled - this will DROP ALL TABLES!');
    console.log('   Press Ctrl+C within 5 seconds to cancel...');
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  try {
    await bootstrap({ database: true });
    
    if (options.sync || options.seed) {
      const { initDatabase } = await import('../src/lib/init/database');
      await initDatabase({
        sync: true,
        force: options.force,
        seed: options.seed,
      });
    }

    console.log('');
    console.log('✅ Database initialization completed successfully!');
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  } finally {
    await shutdown();
    process.exit(0);
  }
}

main();
