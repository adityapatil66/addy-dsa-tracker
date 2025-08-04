import { useParams, useNavigate } from "react-router-dom";
import { ProgressCard } from "@/components/ProgressCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AdminControls } from "@/components/AdminControls";
import { ProblemWithLink } from "@/components/ProblemWithLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Home, User, LogOut, BookOpen, ExternalLink, Play } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
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
  
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [problems, setProblems] = useState<Problem[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [isGuest, setIsGuest] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // Check if user is guest or logged in
  useEffect(() => {
    if (!loading) {
      if (!user) {
        setIsGuest(true);
      }
      fetchChapterData();
    }
  }, [user, loading, chapterId]);

  const fetchChapterData = async () => {
    if (!chapterId) return;
    
    try {
      // Fetch chapter
      const { data: chapterData, error: chapterError } = await supabase
        .from('chapters')
        .select('*')
        .eq('id', chapterId)
        .single();

      if (chapterError) throw chapterError;
      setChapter(chapterData);

      // Fetch lectures
      const { data: lecturesData, error: lecturesError } = await supabase
        .from('lectures')
        .select('*')
        .eq('chapter_id', chapterId)
        .order('order_index');

      if (lecturesError) throw lecturesError;
      setLectures(lecturesData || []);

      // Fetch problems for all lectures
      if (lecturesData && lecturesData.length > 0) {
        const { data: problemsData, error: problemsError } = await supabase
          .from('problems')
          .select('*')
          .in('lecture_id', lecturesData.map(l => l.id))
          .order('order_index');

        if (problemsError) throw problemsError;
        setProblems((problemsData || []).map(p => ({ ...p, difficulty: p.difficulty as 'Easy' | 'Medium' | 'Hard' })));

        // Fetch links for all lectures
        const { data: linksData, error: linksError } = await supabase
          .from('links')
          .select('*')
          .in('lecture_id', lecturesData.map(l => l.id))
          .order('order_index');

        if (linksError) throw linksError;
        setLinks((linksData || []).map(l => ({ ...l, link_type: l.link_type as 'article' | 'video' | 'practice' })));
      }

      // Fetch user progress if logged in
      if (user) {
        const { data: progressData, error: progressError } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .eq('chapter_id', chapterId);

        if (progressError) throw progressError;
        setUserProgress(progressData || []);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to load chapter data",
        variant: "destructive",
      });
    } finally {
      setPageLoading(false);
    }
  };

  const toggleProblemStatus = async (problemId: string) => {
    if (!user || isGuest) {
      toast({
        title: "Sign up required",
        description: "Please sign up to save your progress",
      });
      navigate('/auth');
      return;
    }

    try {
      const existingProgress = userProgress.find(p => p.problem_id === problemId);
      
      if (existingProgress) {
        // Update existing progress
        const { error } = await supabase
          .from('user_progress')
          .update({ 
            completed: !existingProgress.completed,
            completed_at: !existingProgress.completed ? new Date().toISOString() : null
          })
          .eq('id', existingProgress.id);

        if (error) throw error;

        setUserProgress(prev => 
          prev.map(p => 
            p.id === existingProgress.id 
              ? { ...p, completed: !p.completed }
              : p
          )
        );
      } else {
        // Create new progress
        const { data, error } = await supabase
          .from('user_progress')
          .insert({
            user_id: user.id,
            problem_id: problemId,
            chapter_id: chapterId,
            completed: true,
            completed_at: new Date().toISOString()
          })
          .select()
          .single();

        if (error) throw error;

        setUserProgress(prev => [...prev, data]);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update progress",
        variant: "destructive",
      });
    }
  };

  const totalProblems = problems.length;
  const completedProblems = userProgress.filter(p => p.completed && p.problem_id).length;
  const percentage = totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0;

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
            completed={completedProblems}
            total={totalProblems}
            variant="total"
          />
          <ProgressCard
            title="Lectures"
            completed={lectures.length}
            total={lectures.length}
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
        <div className="bg-gradient-hero rounded-xl p-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            {chapter.title}
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            {chapter.description}
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {lectures.length} Lectures
            </Badge>
            <Badge variant="secondary" className="bg-accent/20 text-accent">
              {totalProblems} Problems
            </Badge>
          </div>
        </div>

        {/* Admin Controls */}
        {isAdmin && (
          <div className="mb-8">
            <AdminControls 
              chapterId={chapterId} 
              onUpdate={fetchChapterData} 
            />
          </div>
        )}

        {/* Lectures */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Lectures & Content
          </h3>
          
          {lectures.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg border-2 border-dashed border-border">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No lectures available yet.</p>
              {isAdmin && (
                <p className="text-sm text-muted-foreground mt-2">
                  Use the admin controls above to add lectures.
                </p>
              )}
            </div>
          ) : (
            lectures.map((lecture, index) => {
              const lectureProblems = problems.filter(p => p.lecture_id === lecture.id);
              const lectureLinks = links.filter(l => l.link_type === 'practice' && l.lecture_id === lecture.id);
              
              return (
                <Card key={lecture.id} className="overflow-hidden border-primary/20">
                  <CardHeader className="bg-gradient-accent">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-accent-foreground">{lecture.title}</CardTitle>
                        <CardDescription className="text-accent-foreground/80">
                          {lectureProblems.length} problems • {lectureLinks.length} practice links
                        </CardDescription>
                      </div>
                      {isAdmin && (
                        <AdminControls 
                          chapterId={chapterId}
                          lectureId={lecture.id}
                          onUpdate={fetchChapterData} 
                        />
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    {lecture.content && (
                      <div className="mb-6 p-4 bg-muted rounded-lg">
                        <p className="text-foreground whitespace-pre-wrap">{lecture.content}</p>
                      </div>
                    )}

                    {/* Other Links (Articles, Videos) */}
                    {links.filter(l => l.lecture_id === lecture.id && l.link_type !== 'practice').length > 0 && (
                      <div className="mb-6">
                        <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Resources
                        </h5>
                        <div className="grid gap-2">
                          {links.filter(l => l.lecture_id === lecture.id && l.link_type !== 'practice').map((link) => (
                            <Button
                              key={link.id}
                              variant="outline"
                              className="justify-start"
                              onClick={() => window.open(link.url, '_blank')}
                            >
                              {link.link_type === 'video' ? (
                                <Play className="h-4 w-4 mr-2" />
                              ) : (
                                <ExternalLink className="h-4 w-4 mr-2" />
                              )}
                              {link.title}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Problems */}
                    {lectureProblems.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Practice Problems</h5>
                        <div className="space-y-3">
                          {lectureProblems.map((problem) => {
                            const practiceLink = lectureLinks.find(l => 
                              l.title.toLowerCase().includes(problem.title.toLowerCase()) ||
                              l.title.toLowerCase().includes('practice')
                            );
                            
                            const isCompleted = userProgress.some(p => 
                              p.problem_id === problem.id && p.completed
                            );
                            
                            return (
                              <ProblemWithLink
                                key={problem.id}
                                title={problem.title}
                                difficulty={problem.difficulty}
                                completed={isCompleted}
                                onToggle={() => toggleProblemStatus(problem.id)}
                                practiceLink={practiceLink?.url}
                                isGuest={isGuest}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })
          )}
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