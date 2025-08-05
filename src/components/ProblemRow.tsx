import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube, BookOpen } from "lucide-react";
import { Problem } from "@/data/dsaCourse";

interface ProblemRowProps {
  problem: Problem;
  onToggle: () => void;
  isGuest?: boolean;
}

export const ProblemRow = ({ problem, onToggle, isGuest = false }: ProblemRowProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-progress-easy text-progress-easy-foreground';
      case 'Medium':
        return 'bg-progress-medium text-progress-medium-foreground';
      case 'Hard':
        return 'bg-progress-hard text-progress-hard-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
      problem.status === 'completed' 
        ? 'bg-success/10 border-success/20' 
        : 'bg-card border-border hover:bg-muted/50'
    }`}>
      <div className="flex items-center gap-3 flex-1">
        <Checkbox
          checked={problem.status === 'completed'}
          onCheckedChange={isGuest ? () => alert("Please sign up to save your progress!") : onToggle}
          className={`data-[state=checked]:bg-success data-[state=checked]:border-success ${isGuest ? "opacity-50" : ""}`}
        />
        <div className="flex-1">
          <h5 className={`font-medium transition-all ${
            problem.status === 'completed' 
              ? 'text-success line-through' 
              : 'text-foreground'
          }`}>
            {problem.title}
          </h5>
        </div>
        <Badge 
          variant="secondary" 
          className={`text-xs ${getDifficultyColor(problem.difficulty)}`}
        >
          {problem.difficulty}
        </Badge>
      </div>
      
      <div className="flex items-center gap-2 ml-4">
        {problem.articleLink && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-accent"
            onClick={(e) => {
              e.stopPropagation();
              window.open(problem.articleLink, '_blank');
            }}
          >
            <BookOpen className="h-4 w-4" />
          </Button>
        )}
        
        {problem.videoLink && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-accent text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              window.open(problem.videoLink, '_blank');
            }}
          >
            <Youtube className="h-4 w-4" />
          </Button>
        )}
        
        {problem.practiceLink && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-accent"
            onClick={(e) => {
              e.stopPropagation();
              window.open(problem.practiceLink, '_blank');
            }}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        )}
        
        {problem.isFreeProblem && (
          <Badge variant="outline" className="text-xs border-success text-success">
            Free
          </Badge>
        )}
      </div>
    </div>
  );
};