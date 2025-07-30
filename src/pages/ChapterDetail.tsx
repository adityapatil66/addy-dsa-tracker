import { useParams, useNavigate } from "react-router-dom";
import { useDSAProgress } from "@/hooks/useDSAProgress";
import { LectureCard } from "@/components/LectureCard";
import { ProgressCard } from "@/components/ProgressCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AdminControls } from "@/components/AdminControls";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, BookOpen, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { user, signOut, isAdmin, loading } = useAuth();
  const { course, toggleProblemStatus } = useDSAProgress();

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const chapter = course.find(c => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Chapter Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const chapterIndex = course.findIndex(c => c.id === chapterId);
  const percentage = chapter.totalProblems > 0 ? Math.round((chapter.completedProblems / chapter.totalProblems) * 100) : 0;

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="border-primary/20 hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{chapterIndex + 1}</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">{chapter.title}</h1>
                  <p className="text-sm text-muted-foreground">{chapter.description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {user?.email} {isAdmin && '(Admin)'}
                </span>
              </div>
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/")}
                className="border-primary/20 hover:bg-primary/10"
              >
                <Home className="w-4 h-4 mr-2" />
                All Chapters
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
        {/* Chapter Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ProgressCard
            title="Chapter Progress"
            completed={chapter.completedProblems}
            total={chapter.totalProblems}
            variant="total"
          />
          <ProgressCard
            title="Sections"
            completed={chapter.lectures.filter(l => l.completedProblems === l.totalProblems).length}
            total={chapter.lectures.length}
            variant="easy"
          />
          <ProgressCard
            title="Completion"
            completed={percentage}
            total={100}
            variant="medium"
            showAsPercentage
          />
        </div>

        {/* Chapter Header */}
        <div className="bg-gradient-primary rounded-xl p-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Chapter {chapterIndex + 1}: {chapter.title}
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            {chapter.description}
          </p>
        </div>

        {/* Admin Controls */}
        {isAdmin && (
          <div className="mb-8">
            <AdminControls 
              chapterId={chapterId} 
              onUpdate={() => window.location.reload()} 
            />
          </div>
        )}

        {/* Lectures */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground mb-6">Sections</h3>
          {chapter.lectures.map((lecture, index) => (
            <div key={lecture.id} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-foreground">{lecture.title}</h4>
              </div>
              <LectureCard
                lecture={lecture}
                stepId={chapter.id}
                onToggleProblem={toggleProblemStatus}
              />
            </div>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-12 p-6 bg-card rounded-xl border border-border">
          {chapterIndex > 0 ? (
            <Button
              variant="outline"
              onClick={() => navigate(`/chapter/${course[chapterIndex - 1].id}`)}
              className="border-primary/20 hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: {course[chapterIndex - 1].title}
            </Button>
          ) : (
            <div />
          )}
          
          {chapterIndex < course.length - 1 ? (
            <Button
              onClick={() => navigate(`/chapter/${course[chapterIndex + 1].id}`)}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              Next: {course[chapterIndex + 1].title}
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          ) : (
            <Button
              onClick={() => navigate("/")}
              className="bg-gradient-success text-success-foreground hover:opacity-90"
            >
              <Home className="w-4 h-4 mr-2" />
              Complete! Back to Home
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;