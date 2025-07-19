import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressCardProps {
  title: string;
  completed: number;
  total: number;
  variant?: 'easy' | 'medium' | 'hard' | 'total';
}

export const ProgressCard = ({ title, completed, total, variant = 'total' }: ProgressCardProps) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const getProgressColor = () => {
    switch (variant) {
      case 'easy':
        return 'bg-progress-easy';
      case 'medium':
        return 'bg-progress-medium';
      case 'hard':
        return 'bg-progress-hard';
      default:
        return 'bg-primary';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'easy':
        return 'text-progress-easy';
      case 'medium':
        return 'text-progress-medium';
      case 'hard':
        return 'text-progress-hard';
      default:
        return 'text-primary';
    }
  };

  return (
    <Card className="p-6 bg-card border-border">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <div className="space-y-3">
          <div className={`text-3xl font-bold ${getTextColor()}`}>
            {completed} / {total}
          </div>
          <Progress 
            value={percentage} 
            className="w-full h-3" 
          />
          <div className="text-sm text-muted-foreground">
            {percentage}% completed
          </div>
        </div>
      </div>
    </Card>
  );
};