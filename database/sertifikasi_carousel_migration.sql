-- Migration to update sertifikasi_sections table structure to use separate carousel arrays for NIB and HKI
-- This migration adds the new carousel columns for NIB and HKI separately

-- Add new carousel columns for NIB and HKI
ALTER TABLE sertifikasi_sections 
ADD COLUMN nib_carousel_items JSONB DEFAULT '[]'::jsonb,
ADD COLUMN hki_carousel_items JSONB DEFAULT '[]'::jsonb;

-- Migrate existing data from individual image columns to carousel arrays
UPDATE sertifikasi_sections 
SET nib_carousel_items = (
  CASE 
    WHEN nib_image IS NOT NULL AND nib_image != '' THEN
      jsonb_build_array(
        jsonb_build_object(
          'type', 'image',
          'url', nib_image,
          'title', nib_title,
          'description', nib_description
        )
      )
    ELSE '[]'::jsonb
  END
),
hki_carousel_items = (
  CASE 
    WHEN hki_image IS NOT NULL AND hki_image != '' THEN
      jsonb_build_array(
        jsonb_build_object(
          'type', 'image',
          'url', hki_image,
          'title', hki_title,
          'description', hki_description
        )
      )
    ELSE '[]'::jsonb
  END
)
WHERE nib_image IS NOT NULL OR hki_image IS NOT NULL;

-- Drop old individual image columns
ALTER TABLE sertifikasi_sections 
DROP COLUMN IF EXISTS nib_image,
DROP COLUMN IF EXISTS hki_image;
