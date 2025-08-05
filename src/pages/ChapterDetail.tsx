import { useParams, useNavigate } from "react-router-dom";
import { ProgressCard } from "@/components/ProgressCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AdminControls } from "@/components/AdminControls";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Home, User, LogOut, BookOpen } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useDSAProgress } from "@/hooks/useDSAProgress";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Chapter {
  id: string;
  title: string;
  description: string;
  created_at: string;
  order_index: number;
}

interface Lecture {
  id: string;
  title: string;
  content: string;
  chapter_id: string;
  order_index: number;
}

interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  lecture_id: string;
  order_index: number;
}

interface Link {
  id: string;
  title: string;
  url: string;
  link_type: 'article' | 'video' | 'practice';
  lecture_id: string;
  order_index: number;
}

interface UserProgress {
  id: string;
  completed: boolean;
  problem_id?: string;
  lecture_id?: string;
  chapter_id?: string;
}

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { user, signOut, isAdmin, loading } = useAuth();
  const { toast } = useToast();
  const { course, toggleProblemStatus, getTotalProgress, getDifficultyProgress } = useDSAProgress();
  
  const [isGuest, setIsGuest] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // Find the static chapter
  const chapter = course.find(step => step.id === chapterId);

  // Check if user is guest or logged in
  useEffect(() => {
    if (!loading) {
      if (!user) {
        setIsGuest(true);
      }
      setPageLoading(false);
    }
  }, [user, loading, chapterId]);

  const handleToggleProblem = (stepId: string, lectureId: string, problemId: string) => {
    if (isGuest) {
      toast({
        title: "Sign up required",
        description: "Please sign up to save your progress",
      });
      navigate('/auth');
      return;
    }
    toggleProblemStatus(stepId, lectureId, problemId);
  };

  const totalProgress = getTotalProgress();
  const difficultyProgress = getDifficultyProgress();

  if (pageLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading chapter...</p>
        </div>
      </div>
    );
  }

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

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

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
                  <span className="text-primary-foreground font-bold">📚</span>
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
        {isGuest && (
          <div className="mb-8 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <p className="text-center text-primary">
              You're browsing as a guest. <Button variant="link" className="p-0 h-auto text-primary" onClick={() => navigate('/auth')}>Sign up</Button> to save your progress!
            </p>
          </div>
        )}

        {/* Chapter Progress */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <ProgressCard
            title="Chapter Progress"
            completed={chapter.completedProblems}
            total={chapter.totalProblems}
            variant="total"
          />
          <ProgressCard
            title="Lectures"
            completed={chapter.lectures.length}
            total={chapter.lectures.length}
            variant="easy"
          />
          <ProgressCard
            title="Completion"
            completed={chapter.totalProblems > 0 ? Math.round((chapter.completedProblems / chapter.totalProblems) * 100) : 0}
            total={100}
            variant="medium"
            showAsPercentage
          />
        </div>

        {/* Chapter Header */}
        <div className="bg-gradient-hero rounded-xl p-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            {chapter.title}
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            {chapter.description}
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {chapter.lectures.length} Lectures
            </Badge>
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              {chapter.totalProblems} Problems
            </Badge>
          </div>
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

        {/* Content */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Chapter Content
          </h3>
          
          <div className="space-y-6">
            <StepCard
              step={chapter}
              onToggleProblem={handleToggleProblem}
              isGuest={isGuest}
            />
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-center items-center mt-12 p-6 bg-card rounded-xl border border-border">
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-primary text-primary-foreground hover:opacity-90"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to All Chapters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;