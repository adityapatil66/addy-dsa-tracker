import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, Target } from "lucide-react";

interface HeaderProps {
  totalProgress: { totalProblems: number; completedProblems: number; percentage: number };
  onResetProgress: () => void;
}

export const Header = ({ totalProgress, onResetProgress }: HeaderProps) => {
  return (
    <div className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Target className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Striver's A2Z DSA Course</h1>
          </div>
          
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Master Data Structures and Algorithms from A to Z with this comprehensive, 
            well-structured course. Track your progress and build your coding foundation step by step.
          </p>
          
          <div className="bg-black/20 rounded-lg p-6 max-w-md mx-auto">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Progress</span>
                <span className="text-2xl font-bold">
                  {totalProgress.completedProblems} / {totalProgress.totalProblems}
                </span>
              </div>
              <Progress 
                value={totalProgress.percentage} 
                className="w-full h-3 bg-black/30" 
              />
              <div className="text-center">
                <span className="text-2xl font-bold">{totalProgress.percentage}%</span>
                <span className="text-sm ml-2">completed</span>
              </div>
            </div>
          </div>
          
          <Button
            onClick={onResetProgress}
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset Progress
          </Button>
        </div>
      </div>
    </div>
  );
};