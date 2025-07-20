import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Step } from "@/data/dsaCourse";
import { BookOpen, CheckCircle2 } from "lucide-react";

interface ChapterCardProps {
  chapter: Step;
  index: number;
  onClick: () => void;
}

export const ChapterCard = ({ chapter, index, onClick }: ChapterCardProps) => {
  const percentage = chapter.totalProblems > 0 ? Math.round((chapter.completedProblems / chapter.totalProblems) * 100) : 0;
  const isCompleted = percentage === 100;

  return (
    <Card 
      className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow border-primary/20 bg-gradient-to-br from-card to-card/80"
      onClick={onClick}
    >
      {/* Chapter number indicator */}
      <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
        <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
      </div>

      {/* Completion badge */}
      {isCompleted && (
        <div className="absolute top-4 right-4 text-success">
          <CheckCircle2 className="w-6 h-6" />
        </div>
      )}

      <div className="p-6 space-y-4">
        {/* Icon and title */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {chapter.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {chapter.description}
            </p>
          </div>
        </div>

        {/* Progress section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">
              {chapter.completedProblems} / {chapter.totalProblems}
            </span>
          </div>
          
          <Progress 
            value={percentage} 
            className="h-2 bg-muted"
          />
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">{percentage}% complete</span>
            <span className="text-muted-foreground">{chapter.lectures.length} sections</span>
          </div>
        </div>

        {/* Hover indicator */}
        <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg" />
      </div>
    </Card>
  );
};