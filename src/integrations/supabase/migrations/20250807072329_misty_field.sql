/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `email` (text, required)
      - `subject` (text, required)
      - `message` (text, required)
      - `status` (text, default 'unread')
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public to insert messages
    - Add policy for admins to view messages (restricted for now)

  3. Features
    - Automatic timestamp updates
    - Status tracking for message management
    - Input validation constraints
*/

-- Create contact messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for contact messages
CREATE POLICY "Anyone can create contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (false); -- This will need to be updated when admin auth is implemented

CREATE POLICY "Admins can update contact messages" 
ON public.contact_messages 
FOR UPDATE 
USING (false); -- This will need to be updated when admin auth is implemented

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_messages_updated_at
BEFORE UPDATE ON public.contact_messages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages(email);
