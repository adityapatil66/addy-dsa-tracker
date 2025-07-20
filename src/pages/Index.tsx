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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Learning Path */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Learning Path</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete all {totalProgress.totalProblems} problems across {course.length} comprehensive chapters. 
              Each chapter builds upon the previous one to give you a solid foundation.
            </p>
          </div>
          
          <div className="grid gap-6">
            {course.map((step, index) => (
              <div key={step.id} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">Chapter {index + 1}</h3>
                  </div>
                </div>
                <StepCard
                  step={step}
                  onToggleProblem={toggleProblemStatus}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Footer */}
        <div className="mt-20 text-center p-8 bg-gradient-accent rounded-xl shadow-xl">
          <h3 className="text-3xl font-bold text-accent-foreground mb-4">
            Keep Going! 🚀
          </h3>
          <p className="text-accent-foreground/90 max-w-2xl mx-auto text-lg">
            Every problem you solve brings you one step closer to mastering DSA. 
            Consistency is key - dedicate time daily and watch your skills grow exponentially!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
