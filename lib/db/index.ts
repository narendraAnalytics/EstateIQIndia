import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in environment variables');
}

/**
 * Initialize Neon serverless client (HTTP)
 * Perfect for Next.js serverless functions and edge runtime
 */
const sql = neon(process.env.DATABASE_URL);

/**
 * Create Drizzle database instance with schema
 * This provides type-safe database access throughout your application
 */
export const db = drizzle(sql, { schema });

/**
 * Export schema for type-safe queries
 */
export { schema };
