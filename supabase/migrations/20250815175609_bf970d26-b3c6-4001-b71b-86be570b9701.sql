-- Get the current authenticated user and update their role to admin
-- This will grant admin access to add problems and descriptions

UPDATE public.user_roles 
SET role = 'admin'
WHERE user_id = auth.uid();

-- If no role exists for the current user, insert admin role
INSERT INTO public.user_roles (user_id, role)
SELECT auth.uid(), 'admin'::app_role
WHERE NOT EXISTS (
  SELECT 1 FROM public.user_roles WHERE user_id = auth.uid()
);