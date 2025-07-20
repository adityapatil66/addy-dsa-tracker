import { useDSAProgress } from "@/hooks/useDSAProgress";
import { ChapterCard } from "@/components/ChapterCard";
import { ProgressCard } from "@/components/ProgressCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { RotateCcw, BookOpen } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const ChapterIndex = () => {
  const navigate = useNavigate();
  const { 
    course, 
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

  const handleChapterClick = (chapterId: string) => {
    navigate(`/chapter/${chapterId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">DSA Learning Kit</h1>
                <p className="text-sm text-muted-foreground">Master Data Structures & Algorithms</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetProgress}
                className="border-destructive/20 text-destructive hover:bg-destructive/10"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Progress
              </Button>
            </div>
          </div>
        </div>
      </header>

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
            Explore {course.length} comprehensive chapters covering all essential DSA topics. 
            Each chapter contains carefully curated problems to build your expertise step by step.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {course.map((chapter, index) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              index={index}
              onClick={() => handleChapterClick(chapter.id)}
            />
          ))}
        </div>

        {/* Motivational Footer */}
        <div className="text-center p-8 bg-gradient-accent rounded-xl shadow-xl">
          <h3 className="text-3xl font-bold text-accent-foreground mb-4">
            Ready to Begin Your Journey? 🚀
          </h3>
          <p className="text-accent-foreground/90 max-w-2xl mx-auto text-lg">
            Choose any chapter to start learning. Track your progress, solve problems at your own pace, 
            and build the skills that will make you a better programmer!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChapterIndex;