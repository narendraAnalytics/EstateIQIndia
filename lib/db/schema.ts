import { pgTable, text, timestamp, uuid, jsonb, integer } from 'drizzle-orm/pg-core';
import { usersSync } from 'drizzle-orm/neon';

/**
 * Neon Auth Users Sync Table (Managed by Neon Auth)
 * This is a reference to the auto-managed neon_auth.users_sync table
 * DO NOT modify this table - it's automatically synced by Neon Auth
 */
export { usersSync };

/**
 * Saved Properties Table
 * Stores properties that users have saved or are tracking
 */
export const savedProperties = pgTable('saved_properties', {
  id: uuid('id').primaryKey().defaultRandom(),

  // Foreign key to neon_auth.users_sync
  userId: text('user_id')
    .notNull()
    .references(() => usersSync.id, { onDelete: 'cascade' }),

  // Property details
  stateName: text('state_name').notNull(),
  cityName: text('city_name'),
  propertyType: text('property_type'), // e.g., "Residential", "Commercial"
  location: text('location'),

  // Property metadata stored as JSON
  propertyData: jsonb('property_data'), // Can store additional property details

  // Notes
  userNotes: text('user_notes'),

  // Timestamps
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

/**
 * Search History Table
 * Tracks which states/cities users have analyzed
 */
export const searchHistory = pgTable('search_history', {
  id: uuid('id').primaryKey().defaultRandom(),

  // Foreign key to neon_auth.users_sync
  userId: text('user_id')
    .notNull()
    .references(() => usersSync.id, { onDelete: 'cascade' }),

  // Search details
  stateName: text('state_name').notNull(),
  cityName: text('city_name'),
  searchType: text('search_type'), // e.g., "state_analysis", "property_valuation"

  // Timestamp
  searchedAt: timestamp('searched_at', { withTimezone: true }).defaultNow().notNull(),
});

/**
 * Analysis Results Table
 * Stores AI-generated analysis for states/properties
 */
export const analysisResults = pgTable('analysis_results', {
  id: uuid('id').primaryKey().defaultRandom(),

  // Foreign key to neon_auth.users_sync
  userId: text('user_id')
    .notNull()
    .references(() => usersSync.id, { onDelete: 'cascade' }),

  // Analysis subject
  stateName: text('state_name').notNull(),
  cityName: text('city_name'),
  analysisType: text('analysis_type').notNull(), // e.g., "state_overview", "investment_analysis"

  // Analysis data stored as JSON (from Gemini API)
  analysisData: jsonb('analysis_data').notNull(),

  // Ratings and metrics
  investmentRating: integer('investment_rating'), // 1-5 rating
  growthScore: integer('growth_score'), // Percentage or score

  // Timestamps
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true }), // Optional expiration for cached results
});

// Export types for TypeScript
export type User = typeof usersSync.$inferSelect;
export type SavedProperty = typeof savedProperties.$inferSelect;
export type NewSavedProperty = typeof savedProperties.$inferInsert;
export type SearchHistory = typeof searchHistory.$inferSelect;
export type NewSearchHistory = typeof searchHistory.$inferInsert;
export type AnalysisResult = typeof analysisResults.$inferSelect;
export type NewAnalysisResult = typeof analysisResults.$inferInsert;
