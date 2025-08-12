import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Square, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CodeEditorProps {
  problem?: {
    title: string;
    description?: string;
    difficulty?: string;
  };
  onClose?: () => void;
}

const LANGUAGE_CONFIGS = {
  java: {
    id: 62,
    name: 'Java (OpenJDK 13.0.1)',
    defaultCode: `public class Main {
    public static void main(String[] args) {
        // Your code here
        System.out.println("Hello World");
    }
}`
  },
  python: {
    id: 71,
    name: 'Python (3.8.1)',
    defaultCode: `# Your code here
print("Hello World")`
  },
  cpp: {
    id: 54,
    name: 'C++ (GCC 9.2.0)',
    defaultCode: `#include <iostream>
using namespace std;

int main() {
    // Your code here
    cout << "Hello World" << endl;
    return 0;
}`
  }
};

export const CodeEditor = ({ problem, onClose }: CodeEditorProps) => {
  const [language, setLanguage] = useState<keyof typeof LANGUAGE_CONFIGS>('python');
  const [code, setCode] = useState(LANGUAGE_CONFIGS[language].defaultCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState('');
  const { toast } = useToast();

  const handleLanguageChange = (newLanguage: keyof typeof LANGUAGE_CONFIGS) => {
    setLanguage(newLanguage);
    setCode(LANGUAGE_CONFIGS[newLanguage].defaultCode);
    setOutput('');
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('');

    try {
      const languageConfig = LANGUAGE_CONFIGS[language];
      
      // Use our edge function instead of direct Judge0 API
      const response = await fetch('/api/run-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          languageId: languageConfig.id,
          sourceCode: btoa(code), // Base64 encode
          stdin: btoa(input), // Base64 encode
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        setOutput(result.output);
      } else {
        setOutput(`Error: ${result.output || 'Failed to execute code'}`);
      }
    } catch (error) {
      console.error('Code execution error:', error);
      setOutput('Error executing code. Please try again.');
      toast({
        title: "Execution Error",
        description: "Failed to execute code. Please check your internet connection.",
        variant: "destructive"
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-foreground">Code Editor</h2>
            {problem && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Problem:</span>
                <span className="font-medium text-foreground">{problem.title}</span>
                {problem.difficulty && (
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {problem.difficulty}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={runCode}
              disabled={isRunning}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Run Code
                </>
              )}
            </Button>
            {onClose && (
              <Button variant="outline" onClick={onClose}>
                <Square className="w-4 h-4 mr-2" />
                Close
              </Button>
            )}
          </div>
        </div>

        {problem?.description && (
          <Card className="mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Problem Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                {problem.description}
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Editor and Output */}
      <div className="flex-1 flex">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="bg-[#1e1e1e] text-white p-2 text-sm font-medium">
            {LANGUAGE_CONFIGS[language].name}
          </div>
          <Editor
            height="100%"
            language={language === 'cpp' ? 'cpp' : language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              lineNumbers: 'on',
              folding: true,
              bracketMatching: 'always',
              autoIndent: 'advanced',
              formatOnType: true,
              formatOnPaste: true,
            }}
          />
        </div>

        {/* Input/Output Panel */}
        <div className="w-1/3 border-l border-border flex flex-col">
          {/* Input Section */}
          <div className="flex-1 flex flex-col">
            <div className="bg-muted p-2 text-sm font-medium border-b border-border">
              Input
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter input for your program..."
              className="flex-1 p-3 bg-background border-0 resize-none focus:outline-none text-sm font-mono"
            />
          </div>

          {/* Output Section */}
          <div className="flex-1 flex flex-col border-t border-border">
            <div className="bg-muted p-2 text-sm font-medium border-b border-border">
              Output
            </div>
            <div className="flex-1 p-3 bg-background overflow-auto">
              <pre className="text-sm font-mono whitespace-pre-wrap text-foreground">
                {output || 'Click "Run Code" to see output...'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};