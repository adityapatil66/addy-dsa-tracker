-- Grant admin access to the most recent user (Adxvaa)
UPDATE public.user_roles 
SET role = 'admin'
WHERE user_id = '87b094f3-99e3-4cd0-b7af-3cbcafaeb31c';