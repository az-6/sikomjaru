-- Migration script untuk menambah support video di carousel
-- Jalankan di Supabase SQL Editor

-- Add carousel_items column to home_sections table
ALTER TABLE home_sections 
ADD COLUMN carousel_items JSONB DEFAULT '[]'::jsonb;

-- Update existing data to migrate carousel_images to carousel_items
UPDATE home_sections 
SET carousel_items = (
  SELECT jsonb_agg(
    jsonb_build_object(
      'type', 'image',
      'url', value,
      'title', ''
    )
  )
  FROM jsonb_array_elements_text(carousel_images) AS value
)
WHERE carousel_images IS NOT NULL 
AND jsonb_array_length(carousel_images) > 0
AND (carousel_items IS NULL OR jsonb_array_length(carousel_items) = 0);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_home_sections_carousel_items ON home_sections USING GIN (carousel_items);
