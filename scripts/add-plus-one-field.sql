-- Adding plus_one field to existing rsvps table
ALTER TABLE public.rsvps 
ADD COLUMN plus_one boolean DEFAULT false;

-- Update RLS policies to include the new field
DROP POLICY IF EXISTS "Allow public RSVP submissions" ON public.rsvps;
DROP POLICY IF EXISTS "Allow public RSVP viewing" ON public.rsvps;

CREATE POLICY "Allow public RSVP submissions" ON public.rsvps
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public RSVP viewing" ON public.rsvps
FOR SELECT USING (true);
