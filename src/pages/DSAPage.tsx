import { useDSAProgress } from "@/hooks/useDSAProgress";
import { ProgressCard } from "@/components/ProgressCard";
import { ChapterCard } from "@/components/ChapterCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Target, User, RotateCcw, LogOut, BookOpen } from "lucide-react";

const DSAPage = () => {
  const { user, loading, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();
  
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

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  // Redirect to landing page if not authenticated
  useEffect(() => {
    if (!user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('/')}>
                <BookOpen className="h-6 w-6 text-primary mr-2" />
                <span className="text-xl font-bold text-foreground">DSA Master</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {user.email} {isAdmin && '(Admin)'}
                </span>
              </div>
              <ThemeToggle />
              <Button
                onClick={handleResetProgress}
                variant="outline"
                size="sm"
                className="border-destructive/20 text-destructive hover:bg-destructive/10"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Progress
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="border-destructive/20 text-destructive hover:bg-destructive/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-6 py-8">
        {/* Progress Overview - matching reference */}
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

        {/* Hero Section - matching reference */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Learning Path</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Explore 18 comprehensive chapters covering all essential DSA topics. Each chapter contains 
            carefully curated problems to build your expertise step by step.
          </p>
        </div>


        {/* Chapter Cards - matching reference design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.map((chapter, index) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              index={index}
              onClick={() => navigate(`/chapter/${chapter.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DSAPage;
