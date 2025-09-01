-- Create RSVP table for birthday party invitations
CREATE TABLE IF NOT EXISTS rsvps (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  attending BOOLEAN NOT NULL,
  accommodation VARCHAR(20) CHECK (accommodation IN ('none', 'camping', 'sleepover')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_rsvps_attending ON rsvps(attending);
CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at);

-- Enable RLS and add public access policies for birthday party RSVPs
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert RSVPs (public birthday party invitation)
CREATE POLICY "Allow public RSVP submissions" ON rsvps
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to view RSVPs (optional - remove if you want privacy)
CREATE POLICY "Allow public RSVP viewing" ON rsvps
  FOR SELECT 
  USING (true);
