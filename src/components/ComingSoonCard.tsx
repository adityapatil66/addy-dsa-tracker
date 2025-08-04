import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Code, Sparkles, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ComingSoonCardProps {
  title: string;
  description: string;
  estimatedLaunch?: string;
  features?: string[];
  redirectToDSA?: boolean;
}

export const ComingSoonCard = ({ 
  title, 
  description, 
  estimatedLaunch, 
  features,
  redirectToDSA = false 
}: ComingSoonCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNotifyMe = () => {
    toast({
      title: "Notification Set!",
      description: "We'll notify you when this content is available. For now, check out our DSA course!",
    });
    
    if (redirectToDSA) {
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <Card className="relative overflow-hidden border-2 border-dashed border-primary/30 bg-gradient-webdev">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-primary/20 text-primary">
            <Clock className="h-3 w-3 mr-1" />
            Coming Soon
          </Badge>
          {estimatedLaunch && (
            <Badge variant="outline" className="border-accent/50 text-accent">
              {estimatedLaunch}
            </Badge>
          )}
        </div>
        
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Code className="h-6 w-6 text-primary" />
          {title}
        </CardTitle>
        
        <CardDescription className="text-lg">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative space-y-4">
        {features && (
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">What to expect:</h4>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button onClick={handleNotifyMe} className="flex-1 bg-primary hover:bg-primary/90">
            <Bell className="h-4 w-4 mr-2" />
            Notify Me
          </Button>
          
          {redirectToDSA && (
            <Button 
              onClick={() => navigate('/')} 
              variant="outline" 
              className="flex-1 border-accent text-accent hover:bg-accent/10"
            >
              Check DSA Course
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};