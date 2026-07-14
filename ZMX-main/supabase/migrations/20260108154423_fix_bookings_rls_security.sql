/*
  # Fix RLS Security Issues on Bookings Table

  ## Changes Made
  
  1. **Restrict INSERT Policy**
     - Changed from unrestricted `WITH CHECK (true)` to validation-based checks
     - Ensures customer_email is a valid email format
     - Ensures customer_name and customer_phone are not empty
     - Ensures booking_date is in the future or today
     - Prevents spam and invalid bookings while keeping public access
  
  2. **Restrict UPDATE Policy to Admin Only**
     - Changed from `USING (true)` to role-based check
     - Only users with 'admin' role in `raw_app_metadata` can update bookings
     - Prevents unauthorized modifications by any authenticated user
  
  3. **Restrict SELECT Policy to Admin Only**
     - Changed from allowing all authenticated users to role-based check
     - Only users with 'admin' role in `raw_app_metadata` can view bookings
     - Protects customer privacy and booking data
  
  ## Security Improvements
  - INSERT: Public access maintained but with data validation
  - UPDATE: Admin-only access via role check
  - SELECT: Admin-only access via role check
  
  ## Admin Role Setup
  To grant admin access, update user metadata:
  ```sql
  UPDATE auth.users 
  SET raw_app_meta_data = raw_app_meta_data || '{"role": "admin"}'::jsonb
  WHERE email = 'admin@zmx.fr';
  ```
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can create bookings" ON bookings;
DROP POLICY IF EXISTS "Authenticated users can view all bookings" ON bookings;
DROP POLICY IF EXISTS "Authenticated users can update bookings" ON bookings;

-- Create new restrictive INSERT policy with validation
CREATE POLICY "Public can create valid bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- Ensure email format is valid
    customer_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    -- Ensure name is not empty (at least 2 characters)
    AND length(trim(customer_name)) >= 2
    -- Ensure phone is not empty (at least 8 characters)
    AND length(trim(customer_phone)) >= 8
    -- Ensure booking date is today or in the future
    AND booking_date >= CURRENT_DATE
    -- Ensure service is valid
    AND service IN ('park', 'future', 'rent', 'event')
  );

-- Create admin-only SELECT policy
CREATE POLICY "Admin users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

-- Create admin-only UPDATE policy
CREATE POLICY "Admin users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  )
  WITH CHECK (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );

-- Create admin-only DELETE policy (not in original but good practice)
CREATE POLICY "Admin users can delete bookings"
  ON bookings
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  );