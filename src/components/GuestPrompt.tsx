import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Lock, User, UserPlus, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GuestPromptProps {
  onContinueAsGuest: () => void;
}

export const GuestPrompt = ({ onContinueAsGuest }: GuestPromptProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/auth');
  };

  const handleGuestAccess = () => {
    onContinueAsGuest();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-accent border-primary/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary" />
            Welcome to DSA Learning Platform
          </DialogTitle>
          <DialogDescription className="text-accent-foreground/80">
            Get the most out of your learning experience
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <Card className="border-primary/20 bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-primary">
                <UserPlus className="h-5 w-5" />
                Sign Up for Full Access
              </CardTitle>
              <CardDescription>
                • Track your progress across all chapters
                • Save your completed problems
                • Get personalized recommendations
                • Access to exclusive content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleSignUp} className="w-full bg-primary hover:bg-primary/90">
                Create Account
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="h-5 w-5" />
                Continue as Guest
              </CardTitle>
              <CardDescription>
                Limited access - you won't be able to save progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={handleGuestAccess} variant="outline" className="w-full">
                <Lock className="h-4 w-4 mr-2" />
                Browse Content
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};