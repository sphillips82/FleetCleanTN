/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number (optional)
      - `company` (text) - Company name (optional)
      - `fleet_size` (text) - Size of fleet (optional)
      - `message` (text) - Message or inquiry details
      - `created_at` (timestamptz) - Timestamp of submission

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public to insert submissions (for contact form)
    - Add policy for authenticated users to view all submissions (for admin)

  3. Important Notes
    - Contact form submissions are write-only for public users
    - Only authenticated administrators can view submissions
    - All submissions are timestamped for tracking
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company text DEFAULT '',
  fleet_size text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);