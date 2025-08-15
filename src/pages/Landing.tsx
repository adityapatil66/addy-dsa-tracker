import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';
import { BookOpen, Code, Brain, Users, Zap, Target } from 'lucide-react';

export default function Landing() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect authenticated users to DSA page
  useEffect(() => {
    if (user && !loading) {
      navigate('/dsa');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">DSA Master</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button 
                variant="outline" 
                onClick={() => navigate('/auth')}
                className="border-blue-400/30 text-blue-400 hover:bg-blue-400/10"
              >
                Login
              </Button>
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Signup
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Come to our platform and learn <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DSA, Development, and Aptitude
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            A one-stop platform to learn DSA, Development, and Aptitude — designed for students 
            aiming for coding interviews, technical rounds, and placement success.
          </p>

          <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded-full px-6 py-3 mb-8">
            <p className="text-amber-300 font-medium">
              ✨ Currently in Beta — Sign up to be notified at launch
            </p>
          </div>

          <Button 
            onClick={() => navigate('/auth')}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
          >
            Get Started Now
          </Button>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* DSA Card */}
          <Card 
            className="bg-white/10 border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
            onClick={() => navigate('/dsa')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">DSA</h3>
              <p className="text-gray-300 mb-6">
                Full functionality — learn and practice in 18 chapters, run code instantly 
                in Java, Python, or C++, track your progress.
              </p>
              <div className="flex items-center justify-center gap-2 text-green-400 group-hover:gap-3 transition-all">
                <span className="font-medium">Explore DSA</span>
                <Target className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>

          {/* Development Card */}
          <Card 
            className="bg-white/10 border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
            onClick={() => navigate('/development')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <p className="text-gray-300 mb-6">
                Learn modern web development, mobile apps, and software engineering 
                principles to build real-world projects.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-400 group-hover:gap-3 transition-all">
                <span className="font-medium">Coming Soon</span>
                <Target className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>

          {/* Aptitude Card */}
          <Card 
            className="bg-white/10 border-white/20 hover:bg-white/15 transition-all cursor-pointer group"
            onClick={() => navigate('/aptitude')}
          >
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aptitude</h3>
              <p className="text-gray-300 mb-6">
                Master quantitative aptitude, logical reasoning, and verbal ability 
                for placement tests and competitive exams.
              </p>
              <div className="flex items-center justify-center gap-2 text-purple-400 group-hover:gap-3 transition-all">
                <span className="font-medium">Coming Soon</span>
                <Target className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Code Editor</h3>
              <p className="text-gray-400 text-sm">Run code in multiple languages instantly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Progress Tracking</h3>
              <p className="text-gray-400 text-sm">Monitor your learning journey</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Structured Learning</h3>
              <p className="text-gray-400 text-sm">18 comprehensive chapters</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">Learn with fellow students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}