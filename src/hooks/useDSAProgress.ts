import { useState, useEffect } from 'react';
import { dsaCourse, Step, Problem } from '@/data/dsaCourse';

export const useDSAProgress = () => {
  const [course, setCourse] = useState<Step[]>(dsaCourse);

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('dsa-progress');
    if (savedProgress) {
      try {
        const progressData = JSON.parse(savedProgress);
        setCourse(progressData);
      } catch (error) {
        console.error('Error loading progress:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever course state changes
  useEffect(() => {
    localStorage.setItem('dsa-progress', JSON.stringify(course));
  }, [course]);

  const toggleProblemStatus = (stepId: string, lectureId: string, problemId: string) => {
    setCourse(prevCourse => {
      return prevCourse.map(step => {
        if (step.id === stepId) {
          const updatedLectures = step.lectures.map(lecture => {
            if (lecture.id === lectureId) {
              const updatedProblems = lecture.problems.map(problem => {
                if (problem.id === problemId) {
                  const newStatus: Problem['status'] = problem.status === 'completed' ? 'not-started' : 'completed';
                  return { ...problem, status: newStatus };
                }
                return problem;
              });

              // Update lecture completed count
              const completedCount = updatedProblems.filter(p => p.status === 'completed').length;
              return {
                ...lecture,
                problems: updatedProblems,
                completedProblems: completedCount
              };
            }
            return lecture;
          });

          // Update step completed count
          const stepCompletedCount = updatedLectures.reduce((sum, lecture) => sum + lecture.completedProblems, 0);
          
          return {
            ...step,
            lectures: updatedLectures,
            completedProblems: stepCompletedCount
          };
        }
        return step;
      });
    });
  };

  const getTotalProgress = () => {
    const totalProblems = course.reduce((sum, step) => sum + step.totalProblems, 0);
    const completedProblems = course.reduce((sum, step) => sum + step.completedProblems, 0);
    return { totalProblems, completedProblems, percentage: totalProblems > 0 ? Math.round((completedProblems / totalProblems) * 100) : 0 };
  };

  const getDifficultyProgress = () => {
    let easy = { total: 0, completed: 0 };
    let medium = { total: 0, completed: 0 };
    let hard = { total: 0, completed: 0 };

    course.forEach(step => {
      step.lectures.forEach(lecture => {
        lecture.problems.forEach(problem => {
          if (problem.difficulty === 'Easy') {
            easy.total++;
            if (problem.status === 'completed') easy.completed++;
          } else if (problem.difficulty === 'Medium') {
            medium.total++;
            if (problem.status === 'completed') medium.completed++;
          } else if (problem.difficulty === 'Hard') {
            hard.total++;
            if (problem.status === 'completed') hard.completed++;
          }
        });
      });
    });

    return { easy, medium, hard };
  };

  const resetProgress = () => {
    setCourse(dsaCourse);
    localStorage.removeItem('dsa-progress');
  };

  return {
    course,
    toggleProblemStatus,
    getTotalProgress,
    getDifficultyProgress,
    resetProgress
  };
};