-- Add user_type to profiles table
ALTER TABLE public.profiles ADD COLUMN user_type TEXT CHECK (user_type IN ('student', 'teacher', 'viewer')) DEFAULT 'student';