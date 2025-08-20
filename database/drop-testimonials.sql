-- SIKOMJARU CMS Migration: Remove Testimonials Section
-- Run this script if you already have testimonials tables and want to remove them

-- Drop testimonials tables if they exist
DROP TABLE IF EXISTS testimonials CASCADE;
DROP TABLE IF EXISTS testimonials_section CASCADE;

-- Remove any testimonials-related triggers
DROP TRIGGER IF EXISTS update_testimonials_updated_at ON testimonials;
DROP TRIGGER IF EXISTS update_testimonials_section_updated_at ON testimonials_section;

-- Clean up any orphaned data (optional)
-- This is just a safety measure if there were any references

COMMIT;
