/*
  # Create bookings system for ZMX

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `service` (text) - Type of service: 'park', 'performance', 'rent'
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
    - Add policy for public to insert bookings
    - Add policy for authenticated users to view all bookings (admin)
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

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
