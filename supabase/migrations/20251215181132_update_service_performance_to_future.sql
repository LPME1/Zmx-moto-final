/*
  # Update service name from 'performance' to 'future'

  1. Changes
    - Update existing bookings with service 'performance' to 'future'
    - Drop existing CHECK constraint on service column
    - Add new CHECK constraint with 'future' instead of 'performance'
  
  2. Security
    - No changes to RLS policies
*/

-- Update existing bookings from 'performance' to 'future'
UPDATE bookings 
SET service = 'future' 
WHERE service = 'performance';

-- Drop the old constraint
ALTER TABLE bookings DROP CONSTRAINT IF EXISTS bookings_service_check;

-- Add new constraint with 'future' instead of 'performance'
ALTER TABLE bookings ADD CONSTRAINT bookings_service_check 
CHECK (service IN ('park', 'future', 'rent'));
