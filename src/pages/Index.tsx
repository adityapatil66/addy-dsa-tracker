import { useDSAProgress } from "@/hooks/useDSAProgress";
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/ProgressCard";
import { StepCard } from "@/components/StepCard";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const { 
    course, 
    toggleProblemStatus, 
    getTotalProgress, 
    getDifficultyProgress, 
    resetProgress 
  } = useDSAProgress();

  const totalProgress = getTotalProgress();
  const difficultyProgress = getDifficultyProgress();

  const handleResetProgress = () => {
    resetProgress();
    toast({
      title: "Progress Reset",
      description: "Your learning progress has been reset successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        totalProgress={totalProgress} 
        onResetProgress={handleResetProgress}
      />
      
      <div className="container mx-auto px-6 py-8">
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ProgressCard
            title="Total Progress"
            completed={totalProgress.completedProblems}
            total={totalProgress.totalProblems}
            variant="total"
          />
          <ProgressCard
            title="Easy"
            completed={difficultyProgress.easy.completed}
            total={difficultyProgress.easy.total}
            variant="easy"
          />
          <ProgressCard
            title="Medium"
            completed={difficultyProgress.medium.completed}
            total={difficultyProgress.medium.total}
            variant="medium"
          />
          <ProgressCard
            title="Hard"
            completed={difficultyProgress.hard.completed}
            total={difficultyProgress.hard.total}
            variant="hard"
          />
        </div>

        {/* Course Steps */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Course Curriculum</h2>
            <p className="text-muted-foreground">
              Complete all {totalProgress.totalProblems} problems across {course.length} comprehensive steps
            </p>
          </div>
          
          {course.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              onToggleProblem={toggleProblemStatus}
            />
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="mt-16 text-center p-8 bg-gradient-accent rounded-lg">
          <h3 className="text-2xl font-bold text-accent-foreground mb-4">
            Keep Going! 🚀
          </h3>
          <p className="text-accent-foreground/90 max-w-2xl mx-auto">
            Every problem you solve brings you one step closer to mastering DSA. 
            Consistency is key - dedicate time daily and watch your skills grow exponentially!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
