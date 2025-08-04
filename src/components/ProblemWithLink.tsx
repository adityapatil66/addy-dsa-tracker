import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle, Circle } from 'lucide-react';

interface ProblemWithLinkProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
  onToggle: () => void;
  practiceLink?: string;
  isGuest?: boolean;
}

export const ProblemWithLink = ({ 
  title, 
  difficulty, 
  completed, 
  onToggle, 
  practiceLink,
  isGuest = false 
}: ProblemWithLinkProps) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'bg-progress-easy text-success-foreground';
      case 'Medium': return 'bg-progress-medium text-warning-foreground';
      case 'Hard': return 'bg-progress-hard text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handlePracticeClick = () => {
    if (practiceLink) {
      window.open(practiceLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
      <div className="flex items-center gap-3 flex-1">
        <button
          onClick={onToggle}
          disabled={isGuest}
          className={`flex-shrink-0 ${isGuest ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-110 transition-transform'}`}
        >
          {completed ? (
            <CheckCircle className="h-5 w-5 text-success" />
          ) : (
            <Circle className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
        
        <div className="flex-1">
          <h4 className={`font-medium ${completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
            {title}
          </h4>
        </div>
        
        <Badge className={getDifficultyColor(difficulty)}>
          {difficulty}
        </Badge>
      </div>
      
      {practiceLink && (
        <Button
          onClick={handlePracticeClick}
          size="sm"
          variant="outline"
          className="ml-3 flex-shrink-0"
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          Practice
        </Button>
      )}
    </div>
  );
};