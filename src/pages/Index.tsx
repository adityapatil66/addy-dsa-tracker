import { useDSAProgress } from "@/hooks/useDSAProgress";
import { Header } from "@/components/Header";
import { ProgressCard } from "@/components/ProgressCard";
import { StepCard } from "@/components/StepCard";
import { ComingSoonCard } from "@/components/ComingSoonCard";
import { GuestPrompt } from "@/components/GuestPrompt";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

const Index = () => {
  const { user, loading } = useAuth();
  const [showGuestPrompt, setShowGuestPrompt] = useState(!user && !loading);
  const [isGuestMode, setIsGuestMode] = useState(false);
  
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

  const handleContinueAsGuest = () => {
    setIsGuestMode(true);
    setShowGuestPrompt(false);
  };

  // Show guest prompt if user is not logged in and hasn't chosen guest mode
  if (!user && !loading && !isGuestMode) {
    return <GuestPrompt onContinueAsGuest={handleContinueAsGuest} />;
  }

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

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Learning Path</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master essential programming concepts with our comprehensive learning tracks.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* DSA Course */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">Data Structures & Algorithms</h3>
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
                    isGuest={isGuestMode}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Web Development Course */}
          <div>
            <ComingSoonCard 
              title="Web Development Roadmap"
              description="Coming soon! Complete full-stack web development course with React, Node.js, and more."
            />
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
