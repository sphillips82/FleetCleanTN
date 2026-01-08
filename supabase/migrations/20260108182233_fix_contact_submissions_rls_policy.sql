/*
  # Fix Contact Submissions RLS Policy Security Issue

  1. Changes Made
    - Drop the existing unrestricted INSERT policy that uses `WITH CHECK (true)`
    - Create a new restrictive INSERT policy with proper validation
    - Ensure only legitimate contact form submissions are allowed

  2. Security Improvements
    - Validates that required fields (name, email, message) are not empty
    - Validates email format using basic regex pattern
    - Prevents submission spam by enforcing data quality
    - Limits message length to prevent abuse (max 5000 characters)
    - Limits name length (max 200 characters)
    - Ensures email is valid format and reasonable length (max 254 chars per RFC)

  3. Important Notes
    - Anonymous users can still submit contact forms
    - But now submissions must meet validation criteria
    - This prevents malicious or junk submissions while allowing legitimate use
*/

-- Drop the insecure policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create a new secure policy with validation
CREATE POLICY "Allow valid contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure required fields are not empty
    name IS NOT NULL AND 
    trim(name) != '' AND 
    length(name) <= 200 AND
    
    email IS NOT NULL AND 
    trim(email) != '' AND 
    length(email) <= 254 AND
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' AND
    
    message IS NOT NULL AND 
    trim(message) != '' AND 
    length(message) <= 5000
  );