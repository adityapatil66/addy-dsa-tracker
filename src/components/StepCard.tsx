import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Step } from "@/data/dsaCourse";
import { LectureCard } from "./LectureCard";

interface StepCardProps {
  step: Step;
  onToggleProblem: (stepId: string, lectureId: string, problemId: string) => void;
  isGuest?: boolean;
}

export const StepCard = ({ step, onToggleProblem, isGuest = false }: StepCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const percentage = step.totalProblems > 0 ? Math.round((step.completedProblems / step.totalProblems) * 100) : 0;

  return (
    <div className="relative">
      {/* Notebook binding/spine */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-b from-slate-400 to-slate-600 rounded-l-lg border-r-2 border-slate-700">
        <div className="flex flex-col justify-evenly h-full px-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-1 bg-slate-800 rounded-full"></div>
          ))}
        </div>
      </div>
      
      {/* Notebook page */}
      <Card className={`ml-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 border-2 border-orange-200 dark:border-slate-700 overflow-hidden shadow-xl transition-all duration-500 ${isExpanded ? 'transform rotate-1 scale-105' : 'hover:rotate-0 hover:scale-102'}`}>
        {/* Paper lines effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-8 border-b border-blue-300 dark:border-slate-600"></div>
          ))}
        </div>
        
        <div 
          className="relative p-8 cursor-pointer hover:bg-orange-100/50 dark:hover:bg-slate-800/50 transition-all duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Red margin line */}
          <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-red-400 opacity-60"></div>
          
          <div className="flex items-center justify-between ml-8">
            <div className="flex items-center gap-4">
              <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                <ChevronRight className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 font-serif">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-serif italic">{step.description}</p>
              </div>
            </div>
            <div className="text-right min-w-[140px] bg-white/70 dark:bg-slate-700/70 p-3 rounded-lg border border-orange-300 dark:border-slate-600">
              <div className="text-lg font-bold text-slate-800 dark:text-slate-200">
                {step.completedProblems} / {step.totalProblems}
              </div>
              <Progress 
                value={percentage} 
                className="w-28 h-3 mt-2" 
              />
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{percentage}% done</div>
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="relative border-t-2 border-dashed border-orange-300 dark:border-slate-600 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-900">
            {/* Paper lines for expanded content */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-6 border-b border-blue-300 dark:border-slate-600"></div>
              ))}
            </div>
            
            <div className="relative p-6 ml-8">
              <div className="space-y-6">
                {step.lectures.map((lecture) => (
                  <LectureCard
                    key={lecture.id}
                    lecture={lecture}
                    stepId={step.id}
                     onToggleProblem={onToggleProblem}
                     isGuest={isGuest}
                   />
                 ))}
               </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};