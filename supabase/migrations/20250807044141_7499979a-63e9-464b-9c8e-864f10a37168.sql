-- Create table for internship applications
CREATE TABLE public.internship_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  university TEXT,
  year_of_study TEXT,
  major TEXT,
  portfolio_url TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  cover_letter TEXT,
  skills TEXT[], -- Array of skills
  preferred_start_date DATE,
  available_duration TEXT, -- e.g., "3 months", "6 months"
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.internship_applications ENABLE ROW LEVEL SECURITY;

-- Create policies - applications are viewable by admins only, but anyone can create
CREATE POLICY "Anyone can create internship applications" 
ON public.internship_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all applications" 
ON public.internship_applications 
FOR SELECT 
USING (false); -- For now, restrict viewing until admin system is in place

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_internship_applications_updated_at
    BEFORE UPDATE ON public.internship_applications
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();