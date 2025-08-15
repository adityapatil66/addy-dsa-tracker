import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowLeft, Code, Zap, Rocket } from 'lucide-react';

export default function Development() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

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
              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-300">Welcome, {user.email}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleSignOut}
                    className="border-red-400/30 text-red-400 hover:bg-red-400/10"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-8 border-blue-400/30 text-blue-400 hover:bg-blue-400/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="h-12 w-12 text-blue-400" />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Development Track
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master modern web development, mobile apps, and software engineering principles
          </p>
        </div>

        <Card className="bg-white/10 border-white/20 max-w-2xl mx-auto">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="h-8 w-8 text-blue-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon!</h2>
            
            <p className="text-lg text-gray-300 mb-8">
              We're working hard to bring you comprehensive development courses covering:
            </p>
            
            <div className="space-y-3 text-left mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Frontend Development (React, Vue, Angular)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Backend Development (Node.js, Python, Java)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Mobile Development (React Native, Flutter)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>DevOps and Cloud Technologies</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>System Design and Architecture</span>
              </div>
            </div>
            
            <div className="inline-block bg-amber-500/20 border border-amber-500/30 rounded-full px-6 py-3 mb-6">
              <p className="text-amber-300 font-medium">
                ✨ Sign up to be notified when we launch!
              </p>
            </div>
            
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              {user ? 'Stay Tuned!' : 'Sign Up for Updates'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}