export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'not-started' | 'completed' | 'in-progress';
  articleLink?: string;
  practiceLink?: string;
  videoLink?: string;
  isFreeProblem?: boolean;
}

export interface Lecture {
  id: string;
  title: string;
  problems: Problem[];
  totalProblems: number;
  completedProblems: number;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
  totalProblems: number;
  completedProblems: number;
}

export const dsaCourse: Step[] = [
  {
    id: "step-1",
    title: "Learn the basics",
    description: "Start your DSA journey with basic programming concepts",
    totalProblems: 31,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-1-1",
        title: "Things to Know in C++/Java/Python or any language",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          { id: "user-input-output", title: "User Input / Output", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "data-types", title: "Data Types", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "if-else-statements", title: "If Else statements", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "switch-statement", title: "Switch Statement", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "arrays-strings", title: "What are arrays, strings?", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "for-loops", title: "For loops", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "while-loops", title: "While loops", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "functions", title: "Functions (Pass by Reference and Value)", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "time-complexity", title: "Time Complexity", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-1-2",
        title: "Build-up Logical Thinking",
        totalProblems: 1,
        completedProblems: 0,
        problems: [
          { id: "patterns", title: "Patterns", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-1-3",
        title: "Learn STL/Java-Collections",
        totalProblems: 2,
        completedProblems: 0,
        problems: [
          { id: "cpp-stl", title: "C++ STL", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "java-collections", title: "Java Collections", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-1-4",
        title: "Know Basic Maths",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          { id: "count-digits", title: "Count Digits", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "reverse-number", title: "Reverse a Number", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-palindrome", title: "Check Palindrome", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "gcd-hcf", title: "GCD Or HCF", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "armstrong-numbers", title: "Armstrong Numbers", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "print-divisors", title: "Print all Divisors", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-prime", title: "Check for Prime", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-1-5",
        title: "Learn Basic Recursion",
        totalProblems: 10,
        completedProblems: 0,
        problems: [
          { id: "understand-recursion", title: "Understand recursion by print something N times", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "print-linearly", title: "Print name N times using recursion", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "print-1-to-n", title: "Print 1 To N Without Loop", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "print-n-to-1", title: "Print N to 1 without loop", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "sum-first-n", title: "Sum of first N numbers", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "factorial-n", title: "Factorial of N numbers", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "reverse-array", title: "Reverse an array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "string-palindrome", title: "Check if a string is Palindrome or not", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "fibonacci", title: "Fibonacci Number", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "valid-palindrome", title: "Valid Palindrome", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-1-6",
        title: "Learn Basic Hashing",
        totalProblems: 2,
        completedProblems: 0,
        problems: [
          { id: "hashing-theory", title: "Hashing Theory", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "counting-frequencies", title: "Counting frequencies of array elements", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-2",
    title: "Learn Important Sorting Techniques",
    description: "Master the fundamental sorting algorithms",
    totalProblems: 7,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-2-1",
        title: "Sorting-I",
        totalProblems: 3,
        completedProblems: 0,
        problems: [
          { id: "selection-sort", title: "Selection Sort", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "bubble-sort", title: "Bubble Sort", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "insertion-sort", title: "Insertion Sort", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-2-2",
        title: "Sorting-II",
        totalProblems: 4,
        completedProblems: 0,
        problems: [
          { id: "merge-sort", title: "Merge Sort", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "recursive-bubble-sort", title: "Recursive Bubble Sort", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "recursive-insertion-sort", title: "Recursive Insertion Sort", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "quick-sort", title: "Quick Sort", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-3",
    title: "Solve Problems on Arrays [Easy → Medium → Hard]",
    description: "Master array manipulation and problem-solving techniques",
    totalProblems: 40,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-3-1",
        title: "Easy",
        totalProblems: 16,
        completedProblems: 0,
        problems: [
          { id: "largest-element", title: "Largest Element in Array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "second-largest", title: "Second Largest Element in Array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-sorted", title: "Check if array is sorted", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "remove-duplicates", title: "Remove duplicates from Sorted array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "left-rotate-one", title: "Left Rotate an array by one place", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "left-rotate-d", title: "Left rotate an array by D places", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "move-zeros", title: "Move Zeros to end", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "linear-search", title: "Linear Search", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "union-arrays", title: "Union of Two Sorted Arrays", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "missing-number", title: "Find the missing number in an array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "max-consecutive-ones", title: "Max Consecutive Ones", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "single-number", title: "Find the number that appears once", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "longest-subarray-sum-k", title: "Longest subarray with given sum K", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "longest-subarray-sum-k-negatives", title: "Longest subarray with sum K (Positives + Negatives)", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "two-sum", title: "Two Sum", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "sort-array-012", title: "Sort an array of 0's 1's and 2's", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-3-2",
        title: "Medium",
        totalProblems: 15,
        completedProblems: 0,
        problems: [
          { id: "majority-element", title: "Majority Element", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "kadane-algorithm", title: "Kadane's Algorithm", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "print-subarray-max-sum", title: "Print subarray with maximum sum", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "stock-buy-sell", title: "Stock Buy Sell", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "rearrange-array-sign", title: "Rearrange Array Elements by Sign", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "next-permutation", title: "Next Permutation", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "leaders-array", title: "Leaders in an Array", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-consecutive", title: "Longest Consecutive Sequence", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "set-matrix-zeros", title: "Set Matrix Zeros", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "rotate-matrix", title: "Rotate Matrix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "spiral-matrix", title: "Spiral Traversal of Matrix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "count-subarrays-xor-k", title: "Count Subarrays with given XOR", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "merge-overlapping-intervals", title: "Merge Overlapping Sub-intervals", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "merge-sorted-arrays", title: "Merge two Sorted Arrays without extra space", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "find-missing-repeating", title: "Find the repeating and missing numbers", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-3-3",
        title: "Hard",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          { id: "pascal-triangle", title: "Pascal's Triangle", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "majority-element-n3", title: "Majority Elements(>N/3 times)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "three-sum", title: "3 Sum", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "four-sum", title: "4 Sum", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "largest-subarray-zero-sum", title: "Largest Subarray with 0 Sum", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "count-inversions", title: "Count inversions", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "count-reverse-pairs", title: "Count Reverse Pairs", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "maximum-product-subarray", title: "Maximum Product Subarray", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "missing-repeating-optimal", title: "Missing And Repeating Numbers", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-4",
    title: "Binary Search [1D, 2D Arrays, Search Space]",
    description: "Master binary search techniques and applications",
    totalProblems: 32,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-4-1",
        title: "Learning Binary Search on 1D Arrays",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          { id: "binary-search-intro", title: "Binary Search to find X in sorted array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "implement-lower-bound", title: "Implement Lower Bound", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "implement-upper-bound", title: "Implement Upper Bound", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "search-insert-position", title: "Search Insert Position", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "floor-ceil-sorted-array", title: "Floor and Ceil in Sorted Array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "first-last-occurrence", title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "count-occurrences", title: "Count Occurrences in Sorted Array", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "search-rotated-array", title: "Search in Rotated Sorted Array", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-4-2",
        title: "Binary Search on Answers",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          { id: "find-sqrt", title: "Finding Sqrt of a number using Binary Search", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "find-nth-root", title: "Find the Nth root of a number using binary search", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "koko-eating-bananas", title: "Koko Eating Bananas", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-days-bouquets", title: "Minimum days to make M bouquets", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "smallest-divisor", title: "Find the Smallest Divisor", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "capacity-ship-packages", title: "Capacity to Ship Packages within D Days", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "kth-missing-positive", title: "K-th missing positive number", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "aggressive-cows", title: "Aggressive Cows", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "book-allocation", title: "Book Allocation Problem", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "painters-partition", title: "Painter's partition", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "minimize-max-distance", title: "Minimize Max Distance to Gas Station", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "median-two-sorted-arrays", title: "Median of 2 sorted arrays", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-4-3",
        title: "Binary Search on 2D Arrays",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          { id: "find-peak-element", title: "Find Peak Element", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "search-2d-matrix", title: "Search in a 2D Matrix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "search-2d-matrix-ii", title: "Search in a row and column wise sorted matrix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "find-peak-element-2d", title: "Find Peak Element in 2D Array", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "matrix-median", title: "Matrix Median", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "row-max-ones", title: "Row with max 1s", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "search-rotated-array-ii", title: "Search in Rotated Sorted Array II", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "find-minimum-rotated", title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "single-element-sorted", title: "Single Element in a Sorted Array", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "find-peak-element-ii", title: "Find Peak Element II", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "split-array-largest-sum", title: "Split Array Largest Sum", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "kth-element-two-arrays", title: "K-th element of two sorted arrays", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-5",
    title: "Strings [Basic and Medium]",
    description: "Master string manipulation and pattern matching",
    totalProblems: 15,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-5-1",
        title: "Basic and Easy String Problems",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          { id: "remove-outermost-parentheses", title: "Remove outermost Parentheses", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "reverse-words", title: "Reverse words in a string", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "largest-odd-number", title: "Largest odd number in a string", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "longest-common-prefix", title: "Longest Common Prefix", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "isomorphic-strings", title: "Isomorphic Strings", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-anagram", title: "Check whether one string is a rotation of another", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "valid-anagram", title: "Valid Anagram", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "sort-characters-frequency", title: "Sort Characters by Frequency", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-5-2",
        title: "Medium String Problems",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          { id: "maximum-nesting-depth", title: "Maximum Nesting Depth of Parentheses", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "roman-to-integer", title: "Roman Number to Integer and vice versa", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "implement-atoi", title: "Implement Atoi", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "count-number-substrings", title: "Count number of substrings", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-palindromic-substring", title: "Longest Palindromic Substring", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "sum-beauty-substrings", title: "Sum of Beauty of All Substrings", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "reverse-every-word", title: "Reverse every word in a string", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-6",
    title: "Learn LinkedList [Single/Double LL, Medium, Hard Problems]",
    description: "Master linked list operations and advanced techniques",
    totalProblems: 31,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-6-1",
        title: "Learn 1D LinkedList",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          { id: "introduction-linkedlist", title: "Introduction to LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "implement-linkedlist", title: "Implementing LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "insert-node-linkedlist", title: "Inserting a node in LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "delete-node-linkedlist", title: "Deleting a node in LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "find-length-linkedlist", title: "Find the length of the linkedlist", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "search-element-linkedlist", title: "Search an element in the LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "introduction-doubly-linkedlist", title: "Introduction to Doubly LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "insert-doubly-linkedlist", title: "Insert a node in Doubly LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "delete-doubly-linkedlist", title: "Delete a node in Doubly LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-6-2",
        title: "Learn Doubly LinkedList",
        totalProblems: 4,
        completedProblems: 0,
        problems: [
          { id: "reverse-doubly-linkedlist", title: "Reverse a Doubly LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "add-two-numbers", title: "Add two numbers represented as LinkedLists", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "odd-even-linkedlist", title: "Odd Even LinkedList", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "sort-linkedlist", title: "Sort LinkedList", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-6-3",
        title: "Medium Problems of LL",
        totalProblems: 10,
        completedProblems: 0,
        problems: [
          { id: "middle-linkedlist", title: "Find middle element in a LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "reverse-linkedlist", title: "Reverse a LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "detect-loop-linkedlist", title: "Detect a loop in LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "find-starting-loop", title: "Find the starting point of the Loop in LinkedList", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "length-of-loop", title: "Find length of Loop", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-palindrome-linkedlist", title: "Check if LinkedList is Palindrome", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "segregate-odd-even", title: "Segregate odd and even nodes in LinkedList", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "remove-nth-node", title: "Remove N-th node from the end of a LinkedList", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "delete-middle-node", title: "Delete the middle node of the LinkedList", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "sort-list", title: "Sort a LinkedList", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-6-4",
        title: "Hard Problems of LL",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          { id: "reverse-nodes-k-group", title: "Reverse LinkedList in groups of Size K", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "rotate-linkedlist", title: "Rotate a LinkedList", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "flattening-linkedlist", title: "Flattening a LinkedList", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "clone-linkedlist", title: "Clone LinkedList with Random and Next Pointer", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "merge-k-sorted-lists", title: "Merge K sorted LinkedLists", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "multiply-two-linkedlists", title: "Multiply 2 numbers represented as LinkedLists", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "intersection-two-linkedlists", title: "Find intersection of Two LinkedLists", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "design-browser-history", title: "Design Browser History", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-7",
    title: "Recursion [PatternWise]",
    description: "Master recursion with systematic pattern-based approach",
    totalProblems: 25,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-7-1",
        title: "Get a Strong Hold",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          { id: "recursion-introduction", title: "Introduction to Recursion", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "implement-power-function", title: "Implement Power Function", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "count-good-numbers", title: "Count Good numbers", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "sort-stack-recursion", title: "Sort a stack using recursion", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "reverse-stack-recursion", title: "Reverse a stack using recursion", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-7-2",
        title: "Subsequences Pattern",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          { id: "generate-all-subsequences", title: "Generate all binary strings", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "generate-parentheses", title: "Generate Parentheses", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "subset-sum-equal-k", title: "Subset Sum equal to target", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "count-subsequences-sum-k", title: "Count all subsequences with sum K", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "check-subsequence-sum-k", title: "Check if there exists a subsequence with sum K", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "combination-sum", title: "Combination Sum", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-7-3",
        title: "Trying out all Combos [Hard]",
        totalProblems: 14,
        completedProblems: 0,
        problems: [
          { id: "combination-sum-ii", title: "Combination Sum II", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "subset-sum-ii", title: "Subset Sum II", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "combination-sum-iii", title: "Combination Sum III", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "letter-combinations", title: "Letter Combinations of a Phone Number", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "palindrome-partitioning", title: "Palindrome Partitioning", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "word-search", title: "Word Search", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "n-queens", title: "N-Queens", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "sudoku-solver", title: "Sudoku Solver", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "m-coloring", title: "M-Coloring Problem", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "rat-in-maze", title: "Rat in a Maze", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "word-break-ii", title: "Word Break II", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "permutations", title: "Permutations", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "permutations-ii", title: "Permutations II", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "kth-permutation", title: "Kth permutation Sequence", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-8",
    title: "Bit Manipulation [Concepts & Problems]",
    description: "Master bitwise operations and bit manipulation techniques",
    totalProblems: 23,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-8-1",
        title: "Learn Bit Manipulation",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          { id: "bit-manipulation-intro", title: "Introduction to Bit Manipulation", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-ith-bit", title: "Check if the i-th bit is set or not", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-odd-even", title: "Check if a number is odd or even", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-power-of-two", title: "Check if a number is power of 2 or not", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "count-set-bits", title: "Count the number of set bits", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "set-unset-bits", title: "Set/Unset the rightmost unset bit", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "swap-two-numbers", title: "Swap two numbers", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "divide-two-integers", title: "Divide two integers without using multiplication, division and mod operator", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-8-2",
        title: "Interview Problems",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          { id: "count-total-set-bits", title: "Count total set bits", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "single-number-ii", title: "Single Number II", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "single-number-iii", title: "Single Number III", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "xor-queries-subarray", title: "XOR Queries of a Subarray", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "find-xor-beauty", title: "Find XOR of numbers from L to R", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "two-numbers-odd-times", title: "Find two numbers appearing odd number of times", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "bit-difference", title: "Bit Difference", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "power-set", title: "Power Set", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-8-3",
        title: "Advanced Maths",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          { id: "prime-factorization", title: "Prime Factorization using Sieve", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "all-divisors", title: "All divisors of a number", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "sieve-eratosthenes", title: "Sieve of Eratosthenes", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "power-exponentiation", title: "Power(n, x)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "count-primes", title: "Count Primes", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "modular-exponentiation", title: "Modular Exponentiation", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "print-prime-factors", title: "Print Prime Factors of a number", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-9",
    title: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]",
    description: "Master stack and queue data structures with advanced applications",
    totalProblems: 30,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-9-1",
        title: "Learning",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          { id: "implement-stack-arrays", title: "Implement Stack using Arrays", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "implement-queue-arrays", title: "Implement Queue using Arrays", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "implement-stack-queue", title: "Implement Stack using Queue", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "implement-queue-stack", title: "Implement Queue using Stack", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "valid-parentheses", title: "Valid Parentheses", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "min-stack", title: "Min Stack", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "infix-postfix", title: "Infix to Postfix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "prefix-infix-postfix", title: "Prefix to Infix to Postfix", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-9-2",
        title: "Prefix, Infix, PostFix Conversion Problems",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          { id: "postfix-infix", title: "Postfix to Infix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "prefix-postfix", title: "Prefix to Postfix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "postfix-prefix", title: "Postfix to Prefix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "infix-prefix", title: "Infix to Prefix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "prefix-infix", title: "Prefix to Infix", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-9-3",
        title: "Monotonic Stack/Queue Problems [VVV. Imp]",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          { id: "next-greater-element", title: "Next Greater Element", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "next-greater-element-ii", title: "Next Greater Element II", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "next-smaller-element", title: "Next Smaller Element", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "number-nges-right", title: "Number of NGEs to the right", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "trapping-rainwater", title: "Trapping Rainwater", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "sum-subarray-minimums", title: "Sum of subarray minimums", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "asteroid-collision", title: "Asteroid Collision", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "sum-subarray-ranges", title: "Sum of subarray ranges", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "remove-k-digits", title: "Remove K digits", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "largest-rectangle-histogram", title: "Largest rectangle in a histogram", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "maximal-rectangle", title: "Maximal Rectangle", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "sliding-window-maximum", title: "Sliding Window maximum", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-9-4",
        title: "Implementation Problems",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          { id: "lru-cache", title: "LRU cache", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "lfu-cache", title: "LFU Cache", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "largest-rectangle-binary-matrix", title: "Largest rectangle in a binary matrix", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "sliding-window-maximum-deque", title: "Sliding Window Maximum", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "the-celebrity-problem", title: "The Celebrity Problem", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-10",
    title: "Sliding Window & Two Pointer Combined Problems",
    description: "Master sliding window and two pointer techniques",
    totalProblems: 12,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-10-1",
        title: "Medium Problems",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          { id: "longest-substring-without-repeat", title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "max-points-cards", title: "Max Consecutive Ones III", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "fruit-into-baskets", title: "Fruits into Baskets", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-substring-at-most-k", title: "longest substring with at most k distinct characters", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "number-substrings-three-chars", title: "Number of substrings containing all three characters", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "max-consecutive-ones-iii", title: "Max Consecutive Ones III", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "subarrays-k-different", title: "Subarrays with K different integers", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "minimum-window-substring", title: "Minimum Window substring", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "minimum-window-subsequence", title: "Minimum Window Subsequence", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "container-most-water", title: "Container with most water", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "three-sum-closest", title: "3 Sum Closest", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "count-nice-subarrays", title: "Count Nice Subarrays", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-11",
    title: "Heaps [Learning, Medium, Hard Problems]",
    description: "Master heap data structure and priority queue applications",
    totalProblems: 17,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-11-1",
        title: "Learning",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          { id: "heap-introduction", title: "Introduction to Priority Queues using Binary Heaps", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "implement-min-heap", title: "Min Heap and Max Heap Implementation", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "check-min-heap", title: "Check if an array represents a min-heap or not", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "convert-min-max-heap", title: "Convert min Heap to max Heap", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "does-array-represent-heap", title: "Does array represent Heap", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "introduction-priority-queue", title: "Introduction to Priority Queue", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-11-2",
        title: "Medium Problems",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          { id: "kth-largest-element", title: "Kth largest element in an array", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "kth-smallest-element", title: "Kth smallest element in an array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "sort-k-sorted-array", title: "Sort a K sorted array", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "merge-m-sorted-lists", title: "Merge M sorted Lists", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "replace-elements-rank", title: "Replace elements by its rank in the array", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "task-scheduler", title: "Task Scheduler", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-11-3",
        title: "Hard Problems",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          { id: "design-twitter", title: "Design twitter", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "connect-n-ropes", title: "Connect n ropes with minimum cost", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "k-most-frequent-elements", title: "K most frequent elements", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "maximum-sum-combinations", title: "Maximum Sum Combination", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "count-inversions-merge-sort", title: "Count Inversions", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-12",
    title: "Greedy Algorithms [Easy, Medium/Hard]",
    description: "Master greedy algorithmic approach and optimization problems",
    totalProblems: 16,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-12-1",
        title: "Easy Problems",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          { id: "assign-cookies", title: "Assign Cookies", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "fractional-knapsack", title: "Fractional Knapsack", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "find-minimum-coins", title: "Find minimum number of coins", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "lemonade-change", title: "Lemonade Change", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "valid-parenthesis-string", title: "Valid Parenthesis String", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "n-meetings-one-room", title: "N meetings in one room", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "jump-game", title: "Jump Game", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-12-2",
        title: "Medium/Hard Problems",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          { id: "jump-game-ii", title: "Jump Game II", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-platforms", title: "Minimum number of platforms required for a railway", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "job-sequencing", title: "Job Sequencing Problem", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "candy", title: "Candy", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "shortest-job-first", title: "Shortest Job First", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "page-faults-lru", title: "Page Faults in LRU", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "insert-interval", title: "Insert Interval", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "merge-intervals", title: "Merge Intervals", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "non-overlapping-intervals", title: "Non-overlapping Intervals", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-13",
    title: "Binary Trees [Traversals, Medium and Hard Problems]",
    description: "Master binary tree operations and advanced tree algorithms",
    totalProblems: 39,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-13-1",
        title: "Traversals",
        totalProblems: 11,
        completedProblems: 0,
        problems: [
          { id: "binary-tree-representation", title: "Binary Tree Representation", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "binary-tree-traversals", title: "Binary Tree Traversals", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "preorder-traversal", title: "Preorder Traversal", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "inorder-traversal", title: "Inorder Traversal", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "postorder-traversal", title: "Postorder Traversal", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "level-order-traversal", title: "Level order Traversal", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "iterative-preorder", title: "Iterative Preorder Traversal", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "iterative-inorder", title: "Iterative Inorder Traversal", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "iterative-postorder-two-stack", title: "Post-order Traversal using 2 stack", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "iterative-postorder-one-stack", title: "Post-order Traversal using 1 stack", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "all-traversals-one-go", title: "All Traversals in One Go", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-13-2",
        title: "Medium Problems",
        totalProblems: 15,
        completedProblems: 0,
        problems: [
          { id: "height-binary-tree", title: "Height of a Binary Tree", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-balanced-binary-tree", title: "Check if the Binary tree is height-balanced or not", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "diameter-binary-tree", title: "Diameter of Binary Tree", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "maximum-path-sum", title: "Maximum path sum", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "check-identical-trees", title: "Check if two trees are identical or not", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "zigzag-traversal", title: "Zig Zag Traversal of Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "boundary-traversal", title: "Boundary Traversal of a Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "vertical-order-traversal", title: "Vertical Order Traversal of Binary Tree", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "top-view-binary-tree", title: "Top View of Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "bottom-view-binary-tree", title: "Bottom View of Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "right-left-view", title: "Right/Left View of Binary Tree", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "check-symmetrical", title: "Check for Symmetrical Binary Tree", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "print-root-to-node-path", title: "Print Root to Node Path in Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "lca-binary-tree", title: "Lowest Common Ancestor in Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "maximum-width", title: "Maximum width of a Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-13-3",
        title: "Hard Problems",
        totalProblems: 13,
        completedProblems: 0,
        problems: [
          { id: "children-sum-property", title: "Children Sum Property in Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "all-nodes-distance-k", title: "Print all the Nodes at a distance of K in Binary Tree", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "minimum-time-burn-tree", title: "Minimum time taken to BURN the Binary Tree from a Node", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "count-total-nodes-complete-tree", title: "Count total Nodes in a COMPLETE Binary Tree", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "construct-unique-binary-tree", title: "Requirements needed to construct a Unique Binary Tree | Theory", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "construct-from-preorder-inorder", title: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "construct-from-postorder-inorder", title: "Construct the Binary Tree from Postorder and Inorder Traversal", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "serialize-deserialize", title: "Serialize and deserialize Binary Tree", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "morris-preorder", title: "Morris Preorder Traversal of a Binary Tree", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "morris-inorder", title: "Morris Inorder Traversal of a Binary Tree", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "flatten-binary-tree", title: "Flatten Binary Tree to LinkedList", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "binary-tree-cameras", title: "Binary Tree Cameras", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "distribute-coins", title: "Distribute Coins in Binary Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-14",
    title: "Binary Search Trees [Concept and Problems]",
    description: "Master binary search tree operations and applications",
    totalProblems: 16,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-14-1",
        title: "Concept",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          { id: "introduction-bst", title: "Introduction to Binary Search Trees", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "search-bst", title: "Search in a Binary Search Tree", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "ceil-bst", title: "Ceil in a Binary Search Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "floor-bst", title: "Floor in a Binary Search Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "insert-node-bst", title: "Insert a given Node in Binary Search Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-14-2",
        title: "Practice Problems",
        totalProblems: 11,
        completedProblems: 0,
        problems: [
          { id: "delete-node-bst", title: "Delete a Node in Binary Search Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "kth-smallest-bst", title: "Find K-th smallest/largest element in BST", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "validate-bst", title: "Check if a tree is a BST or BT", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "lca-bst", title: "LCA in Binary Search Tree", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "construct-bst-preorder", title: "Construct a BST from a preorder traversal", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "inorder-successor-predecessor", title: "Inorder Successor/Predecessor in BST", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "bst-iterator", title: "BST Iterator", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "two-sum-bst", title: "Two Sum In BST", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "recover-bst", title: "Recover BST", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "largest-bst-binary-tree", title: "Largest BST in Binary Tree", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "merge-two-bst", title: "Merge 2 BST 's", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-15",
    title: "Graphs [Concepts & Problems]",
    description: "Master graph algorithms and advanced graph problems",
    totalProblems: 54,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-15-1",
        title: "Learning",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          { id: "graph-representation", title: "Graph Representation", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "bfs-graph", title: "BFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "dfs-graph", title: "DFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "number-provinces", title: "Number of provinces", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "connected-components", title: "Connected Components Problem in Matrix", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "rotten-oranges", title: "Rotten Oranges", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "flood-fill", title: "Flood fill", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-15-2",
        title: "Problems on BFS/DFS",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          { id: "detect-cycle-undirected-bfs", title: "Detect cycle in an undirected graph using BFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "detect-cycle-undirected-dfs", title: "Detect cycle in an undirected graph using DFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "detect-cycle-directed-dfs", title: "Detect cycle in a directed graph using DFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "detect-cycle-directed-bfs", title: "Detect cycle in a directed graph using BFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "topological-sort-dfs", title: "Topological Sort Algorithm | DFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "topological-sort-bfs", title: "Topological Sort Algorithm | BFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "detect-cycle-topo-sort", title: "Detect a cycle in Directed Graph | Topological Sort", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "course-schedule", title: "Course Schedule I and II", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "find-eventual-safe-states", title: "Find Eventual Safe States", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "alien-dictionary", title: "Alien dictionary", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "shortest-path-dag", title: "Shortest Path in DAG", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "shortest-path-binary-maze", title: "Shortest path in a binary maze", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-15-3",
        title: "Topo Sort Problems",
        totalProblems: 4,
        completedProblems: 0,
        problems: [
          { id: "word-ladder", title: "Word Ladder I", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "word-ladder-ii", title: "Word Ladder II", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "number-distinct-islands", title: "Number of Distinct Islands", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "bipartite-graph-bfs", title: "Bipartite Graph | BFS", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-15-4",
        title: "Shortest Path Algorithms",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          { id: "bipartite-graph-dfs", title: "Bipartite Graph | DFS", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "dijkstra-algorithm", title: "Dijkstra's Algorithm", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "shortest-path-print", title: "Shortest Path in Weighted undirected graph", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "shortest-distance-binary-maze", title: "Shortest Distance in a Binary Maze", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "path-minimum-effort", title: "Path with minimum effort", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "cheapest-flights-k-stops", title: "Cheapest flights with K stops", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "network-delay-time", title: "Network Delay time", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "number-ways-arrive-destination", title: "Number of ways to arrive at destination", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-multiplications", title: "Minimum Multiplications to reach End", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-15-5",
        title: "Minimum Spanning Tree",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          { id: "bellman-ford", title: "Bellman Ford Algorithm", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "floyd-warshall", title: "Floyd Warshall Algorithm", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "find-city-threshold-distance", title: "Find the city with the smallest number of neighbors in a threshold distance", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-spanning-tree", title: "Minimum Spanning Tree", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "disjoint-set-union-rank", title: "Disjoint Set | Union by Rank", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-15-6",
        title: "Other Algorithms",
        totalProblems: 17,
        completedProblems: 0,
        problems: [
          { id: "disjoint-set-union-size", title: "Disjoint Set | Union by Size", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "kruskal-algorithm", title: "Kruskal's Algorithm", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "prim-algorithm", title: "Prim's Algorithm", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "number-operations-network-connected", title: "Number of operations to make network connected", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "most-stones-removed", title: "Most Stones Removed with Same Row or Column", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "accounts-merge", title: "Accounts Merge", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "number-islands-ii", title: "Number of Islands II", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "making-large-island", title: "Making a Large Island", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "swim-rising-water", title: "Swim in Rising Water", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "bridges-graph", title: "Bridges in Graph", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "articulation-point", title: "Articulation Point", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "kosaraju-algorithm", title: "Kosaraju's Algorithm", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "strongly-connected-components", title: "Strongly Connected Components(using Kosaraju's algorithm)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "maximum-bipartite-matching", title: "Maximum Bipartite Matching", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "maximum-flow-ford-fulkerson", title: "Maximum Flow | Ford Fulkerson Algorithm", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "minimum-cut-maximum-flow", title: "Minimum Cut | Maximum Flow", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "maximum-matching-general-graph", title: "Maximum Matching in General Graph", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-16",
    title: "Dynamic Programming [Patterns and Problems]",
    description: "Master dynamic programming with systematic pattern-based approach",
    totalProblems: 56,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-16-1",
        title: "Introduction to DP",
        totalProblems: 3,
        completedProblems: 0,
        problems: [
          { id: "dynamic-programming-introduction", title: "Dynamic Programming Introduction", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "climbing-stairs", title: "Climbing Stairs", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "frog-jump", title: "Frog Jump(DP-3)", difficulty: "Easy", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-16-2",
        title: "1D DP",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          { id: "frog-jump-k-distances", title: "Frog Jump with k distances(DP-4)", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "maximum-sum-non-adjacent", title: "Maximum sum of non-adjacent elements (DP-5)", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "house-robber", title: "House Robber (DP-6)", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "house-robber-ii", title: "House Robber 2 (DP-7)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "ninja-training", title: "Ninja Training (DP-8)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "grid-unique-paths", title: "Grid Unique Paths : DP on Grids (DP-8)", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-16-3",
        title: "2D/3D DP and DP on Grids",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          { id: "grid-unique-paths-ii", title: "Grid Unique Paths 2 (DP-9)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-path-sum-grid", title: "Minimum path sum in Grid (DP-10)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-path-sum-triangle", title: "Minimum path sum in Triangular Grid (DP-11)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-maximum-falling-path", title: "Minimum/Maximum Falling Path Sum (DP-12)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "3d-dp-ninja-friends", title: "3-d DP : Ninja and his friends (DP-13)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "subset-sum-equal-target", title: "Subset sum equal to target (DP-14)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "partition-equal-subset-sum", title: "Partition Equal Subset Sum (DP-15)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "partition-set-given-difference", title: "Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP-16)", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-16-4",
        title: "DP on Subsequences",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          { id: "count-subsets-sum-k", title: "Count Subsets with Sum K (DP-17)", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "count-partitions-given-difference", title: "Count Partitions with Given Difference (DP-18)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "0-1-knapsack", title: "0/1 Knapsack (DP-19)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-coins", title: "Minimum Coins (DP-20)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "target-sum", title: "Target Sum (DP-21)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "coin-change-ii", title: "Coin Change 2 (DP-22)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "unbounded-knapsack", title: "Unbounded Knapsack (DP-23)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "rod-cutting", title: "Rod Cutting Problem | (DP-24)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-common-subsequence", title: "Longest Common Subsequence | (DP-25)", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-16-5",
        title: "DP on Strings",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          { id: "print-longest-common-subsequence", title: "Print Longest Common Subsequence | (DP-26)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-common-substring", title: "Longest Common Substring | (DP-27)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-palindromic-subsequence", title: "Longest Palindromic Subsequence | (DP-28)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "minimum-insertions-palindrome", title: "Minimum insertions to make string palindrome | DP-29", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "minimum-insertions-deletions-lcs", title: "Minimum Insertions/Deletions to Convert String | (DP-30)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "shortest-common-supersequence", title: "Shortest Common Supersequence | (DP-31)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "distinct-subsequences", title: "Distinct Subsequences| (DP-32)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "edit-distance", title: "Edit Distance | (DP-33)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "wildcard-matching", title: "Wildcard Matching | (DP-34)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "best-time-buy-sell-stock", title: "Best Time to Buy and Sell Stock |(DP-35)", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "buy-sell-stock-ii", title: "Buy and Sell Stocks With Cooldown | (DP-36)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "buy-sell-stock-transaction-fee", title: "Buy and Sell Stocks With Transaction Fee | (DP-37)", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-16-6",
        title: "DP on Stocks",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          { id: "buy-sell-stock-iii", title: "Buy and Sell Stock III | (DP-38)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "buy-sell-stock-iv", title: "Buy and Sell Stock IV | (DP-39)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "buy-sell-stock-cooldown", title: "Buy and Sell Stocks With Cooldown | (DP-40)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-increasing-subsequence", title: "Longest Increasing Subsequence | (DP-41)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "printing-longest-increasing-subsequence", title: "Printing Longest Increasing Subsequence | (DP-42)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-increasing-subsequence-binary-search", title: "Longest Increasing Subsequence | Binary Search | (DP-43)", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-16-7",
        title: "DP on LIS",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          { id: "largest-divisible-subset", title: "Largest Divisible Subset | (DP-44)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-string-chain", title: "Longest String Chain | (DP-45)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "longest-bitonic-subsequence", title: "Longest Bitonic Subsequence | (DP-46)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "number-longest-increasing-subsequence", title: "Number of Longest Increasing Subsequences | (DP-47)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "matrix-chain-multiplication", title: "Matrix Chain Multiplication | (DP-48)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "matrix-chain-multiplication-tabulation", title: "Matrix Chain Multiplication | Bottom-Up | (DP-49)", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-16-8",
        title: "MCM DP | Partition DP",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          { id: "minimum-cost-cut-stick", title: "Minimum Cost to Cut the Stick | (DP-50)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "burst-balloons", title: "Burst Balloons | (DP-51)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "evaluate-boolean-expression", title: "Evaluate Boolean Expression to True | (DP-52)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "palindrome-partitioning-ii", title: "Palindrome Partitioning - II | Front Partition | (DP-53)", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "partition-array-maximum-sum", title: "Partition Array for Maximum Sum | Front Partition | (DP-54)", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "maximum-rectangle-binary-matrix", title: "Maximum Rectangle Area with all 1's | (DP-55)", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-17",
    title: "Tries",
    description: "Master trie data structure and string processing applications",
    totalProblems: 7,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-17-1",
        title: "Theory",
        totalProblems: 2,
        completedProblems: 0,
        problems: [
          { id: "implement-trie", title: "Implement TRIE | INSERT | SEARCH | STARTSWITH", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "implement-trie-ii", title: "Implement Trie ll", difficulty: "Medium", status: "not-started", isFreeProblem: true }
        ]
      },
      {
        id: "lec-17-2",
        title: "Problems",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          { id: "longest-word-all-prefixes", title: "Longest word with all prefixes", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "number-distinct-substrings", title: "Number of Distinct Substrings in a String", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "bit-prequisites-trie", title: "Bit PreRequisites for TRIE Problems", difficulty: "Easy", status: "not-started", isFreeProblem: true },
          { id: "maximum-xor-two-numbers", title: "Maximum XOR of two numbers in an array", difficulty: "Medium", status: "not-started", isFreeProblem: true },
          { id: "maximum-xor-queries", title: "Maximum XOR With an Element From Array", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  },
  {
    id: "step-18",
    title: "String Matching Algorithms",
    description: "Master advanced string matching and pattern searching algorithms",
    totalProblems: 3,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-18-1",
        title: "Hard Problems",
        totalProblems: 3,
        completedProblems: 0,
        problems: [
          { id: "z-function", title: "Z-Function", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "kmp-algorithm", title: "KMP Algorithm", difficulty: "Hard", status: "not-started", isFreeProblem: true },
          { id: "minimum-characters-palindrome", title: "Minimum characters needed to be inserted in the beginning to make it palindromic", difficulty: "Hard", status: "not-started", isFreeProblem: true }
        ]
      }
    ]
  }
];

export const getTotalProgress = () => {
  const totalProblems = dsaCourse.reduce((sum, step) => sum + step.totalProblems, 0);
  const completedProblems = dsaCourse.reduce((sum, step) => sum + step.completedProblems, 0);
  return { totalProblems, completedProblems };
};

export const getDifficultyProgress = () => {
  let easy = { total: 0, completed: 0 };
  let medium = { total: 0, completed: 0 };
  let hard = { total: 0, completed: 0 };

  dsaCourse.forEach(step => {
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
