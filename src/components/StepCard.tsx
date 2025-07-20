import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Step } from "@/data/dsaCourse";
import { LectureCard } from "./LectureCard";

interface StepCardProps {
  step: Step;
  onToggleProblem: (stepId: string, lectureId: string, problemId: string) => void;
}

export const StepCard = ({ step, onToggleProblem }: StepCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const percentage = step.totalProblems > 0 ? Math.round((step.completedProblems / step.totalProblems) * 100) : 0;

  return (
    <Card className="bg-card border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
      <div 
        className="p-6 cursor-pointer hover:bg-gradient-to-r hover:from-muted/30 hover:to-muted/50 transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              {isExpanded ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
          <div className="text-right min-w-[120px]">
            <div className="text-sm font-medium text-foreground">
              {step.completedProblems} / {step.totalProblems}
            </div>
            <Progress 
              value={percentage} 
              className="w-24 h-2 mt-1" 
            />
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="border-t border-border bg-muted/20">
          <div className="p-4 space-y-4">
            {step.lectures.map((lecture) => (
              <LectureCard
                key={lecture.id}
                lecture={lecture}
                stepId={step.id}
                onToggleProblem={onToggleProblem}
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};