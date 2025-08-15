import { useParams, useNavigate } from "react-router-dom";
import { ProgressCard } from "@/components/ProgressCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AdminControls } from "@/components/AdminControls";
import { StepCard } from "@/components/StepCard";
import { ProblemEditor } from "@/components/ProblemEditor";
import { ProblemRow } from "@/components/ProblemRow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowLeft, Home, User, LogOut, BookOpen, ChevronDown, ChevronRight } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useDSAProgress } from "@/hooks/useDSAProgress";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Problem as DSAProblem } from "@/data/dsaCourse";

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
  const [selectedProblem, setSelectedProblem] = useState<DSAProblem | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Find the static chapter
  const chapter = course.find(step => step.id === chapterId);

  // Redirect to landing page if not authenticated
  useEffect(() => {
    if (!user && !loading) {
      navigate('/');
    } else if (!loading) {
      setPageLoading(false);
    }
  }, [user, loading, navigate]);

  const handleToggleProblem = (stepId: string, lectureId: string, problemId: string) => {
    toggleProblemStatus(stepId, lectureId, problemId);
  };

  const handleOpenEditor = (problem: DSAProblem) => {
    setSelectedProblem(problem);
    setIsEditorOpen(true);
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
    setSelectedProblem(null);
  };

  const toggleSection = (lectureId: string) => {
    setOpenSections(prev => ({ ...prev, [lectureId]: !prev[lectureId] }));
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

  if (!user) {
    return null; // Will redirect via useEffect
  }

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Chapter Not Found</h1>
          <Button onClick={() => navigate("/dsa")}>
            <Home className="w-4 h-4 mr-2" />
            Back to DSA
          </Button>
        </div>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
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
                onClick={() => navigate("/dsa")}
                className="border-primary/20 hover:bg-primary/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to DSA
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
                onClick={() => navigate("/dsa")}
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
            completed={0}
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
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {chapter.title}
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
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

        {/* Sections */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground mb-6">Sections</h3>
          
          {chapter.lectures.map((lecture, index) => {
            const isOpen = openSections[lecture.id];
            const completedProblems = lecture.problems.filter(p => p.status === 'completed').length;
            
            return (
              <div key={lecture.id} className="border border-border rounded-lg bg-card">
                <Collapsible open={isOpen} onOpenChange={() => toggleSection(lecture.id)}>
                  <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h4 className="font-medium text-foreground text-left">{lecture.title}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {completedProblems} / {lecture.problems.length}
                      </span>
                      {isOpen ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="px-4 pb-4 space-y-2">
                      {lecture.problems.map((problem) => (
                        <div key={problem.id} className="ml-11">
                           <ProblemRow
                             problem={problem}
                             onToggle={() => handleToggleProblem(chapter.id, lecture.id, problem.id)}
                             onOpenEditor={() => handleOpenEditor(problem)}
                             isGuest={false}
                           />
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            );
          })}
        </div>

        {/* Problem Editor Modal */}
        <ProblemEditor
          isOpen={isEditorOpen}
          onClose={handleCloseEditor}
          problem={selectedProblem}
        />

        {/* Navigation Footer */}
        <div className="flex justify-center items-center mt-12 p-6 bg-card rounded-xl border border-border">
          <Button
            onClick={() => navigate("/dsa")}
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