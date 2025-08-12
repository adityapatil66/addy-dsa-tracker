import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CodeEditor } from './CodeEditor';
import { Problem } from '@/data/dsaCourse';

interface ProblemEditorProps {
  isOpen: boolean;
  onClose: () => void;
  problem: Problem | null;
}

export const ProblemEditor = ({ isOpen, onClose, problem }: ProblemEditorProps) => {
  if (!problem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl h-[90vh] p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Code Editor - {problem.title}</DialogTitle>
        </DialogHeader>
        <CodeEditor
          problem={{
            title: problem.title,
            difficulty: problem.difficulty,
            description: `Solve the problem: ${problem.title}`
          }}
          onClose={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};