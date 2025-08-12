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

  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:bg-card/80 border-border bg-card/50"
      onClick={onClick}
    >
      <div className="p-6">
        {/* Chapter number and title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {chapter.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {chapter.description}
            </p>
          </div>
        </div>

        {/* Progress section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">
              {chapter.completedProblems} / {chapter.totalProblems}
            </span>
          </div>
          
          <Progress 
            value={percentage} 
            className="h-1 bg-muted/50"
          />
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">{percentage}% complete</span>
            <span className="text-muted-foreground">{chapter.lectures.length} sections</span>
          </div>
        </div>
      </div>
    </Card>
  );
};