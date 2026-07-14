/*
  # Create bookings system for ZMX Rent

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `service` (text) - Type of service: 'park', 'future', 'rent', 'event'
      - `customer_name` (text) - Customer full name
      - `customer_email` (text) - Customer email
      - `customer_phone` (text) - Customer phone number
      - `booking_date` (date) - Date of the booking
      - `booking_time` (text) - Time slot selected
      - `duration` (text) - Duration of the session
      - `status` (text) - Status: 'pending', 'confirmed', 'cancelled'
      - `notes` (text) - Additional notes from customer
      - `created_at` (timestamptz) - When booking was created

  2. Security
    - Enable RLS on `bookings` table
    - Public INSERT for anon + authenticated (anyone can book)
    - Authenticated SELECT/UPDATE/DELETE for admin management
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service text NOT NULL CHECK (service IN ('park', 'future', 'rent', 'event')),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  duration text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can create bookings" ON bookings;
CREATE POLICY "Public can create bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated can view bookings" ON bookings;
CREATE POLICY "Authenticated can view bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Authenticated can update bookings" ON bookings;
CREATE POLICY "Authenticated can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated can delete bookings" ON bookings;
CREATE POLICY "Authenticated can delete bookings"
  ON bookings
  FOR DELETE
  TO authenticated
  USING (true);
