-- Create editing training enrollments table
CREATE TABLE public.editing_enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  experience_level TEXT NOT NULL,
  current_skills TEXT[],
  goals TEXT,
  preferred_schedule TEXT,
  payment_method TEXT,
  amount DECIMAL(10,2) NOT NULL DEFAULT 299.00,
  status TEXT NOT NULL DEFAULT 'pending',
  contact_preference TEXT DEFAULT 'email',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.editing_enrollments ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is for public enrollment)
CREATE POLICY "Anyone can create editing enrollments" 
ON public.editing_enrollments 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all editing enrollments" 
ON public.editing_enrollments 
FOR SELECT 
USING (false); -- This will need to be updated when admin auth is implemented

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_editing_enrollments_updated_at
BEFORE UPDATE ON public.editing_enrollments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();