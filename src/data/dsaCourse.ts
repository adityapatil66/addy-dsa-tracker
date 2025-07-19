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
          {
            id: "user-input-output",
            title: "User Input / Output",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/c/c-basic-input-output/",
            isFreeProblem: true
          },
          {
            id: "data-types",
            title: "Data Types",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "if-else-statements",
            title: "If Else statements",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/if-else/if-else-statements/",
            isFreeProblem: true
          },
          {
            id: "switch-statement",
            title: "Switch Statement",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/switch-case/switch-case-statements/",
            isFreeProblem: true
          },
          {
            id: "arrays-strings",
            title: "What are arrays, strings?",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "for-loops",
            title: "For loops",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/for-loop/understanding-for-loop/",
            isFreeProblem: true
          },
          {
            id: "while-loops",
            title: "While loops",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/while-loop/while-loops-in-programming/",
            isFreeProblem: true
          },
          {
            id: "functions",
            title: "Functions (Pass by Reference and Value)",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "time-complexity",
            title: "Time Complexity [Learn Basics, and then analyse in next Steps]",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/time-complexity/time-and-space-complexity-strivers-a2z-dsa-course/",
            isFreeProblem: true
          }
        ]
      },
      {
        id: "lec-1-2",
        title: "Build-up Logical Thinking",
        totalProblems: 1,
        completedProblems: 0,
        problems: [
          {
            id: "patterns",
            title: "Patterns",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/",
            isFreeProblem: true
          }
        ]
      },
      {
        id: "lec-1-3",
        title: "Learn STL/Java-Collections or similar thing in your language",
        totalProblems: 2,
        completedProblems: 0,
        problems: [
          {
            id: "cpp-stl",
            title: "C++ STL",
            difficulty: "Medium",
            status: "not-started",
            articleLink: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/",
            isFreeProblem: true
          },
          {
            id: "java-collections",
            title: "Java Collections",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          }
        ]
      },
      {
        id: "lec-1-4",
        title: "Know Basic Maths",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          {
            id: "count-digits",
            title: "Count Digits",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/count-digits-in-a-number/",
            isFreeProblem: true
          },
          {
            id: "reverse-number",
            title: "Reverse a Number",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/maths/reverse-digits-of-a-number",
            isFreeProblem: true
          },
          {
            id: "check-palindrome",
            title: "Check Palindrome",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/check-if-a-number-is-palindrome-or-not/",
            isFreeProblem: true
          },
          {
            id: "gcd-hcf",
            title: "GCD Or HCF",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/find-gcd-of-two-numbers/",
            isFreeProblem: true
          },
          {
            id: "armstrong-numbers",
            title: "Armstrong Numbers",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/",
            isFreeProblem: true
          },
          {
            id: "print-divisors",
            title: "Print all Divisors",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/",
            isFreeProblem: true
          },
          {
            id: "check-prime",
            title: "Check for Prime",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/",
            isFreeProblem: true
          }
        ]
      },
      {
        id: "lec-1-5",
        title: "Learn Basic Recursion",
        totalProblems: 10,
        completedProblems: 0,
        problems: [
          {
            id: "understand-recursion",
            title: "Understand recursion by print something N times",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "print-linearly",
            title: "Print name N times using recursion",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "print-1-to-n",
            title: "Print 1 To N Without Loop",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "print-n-to-1",
            title: "Print N to 1 without loop",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "sum-first-n",
            title: "Sum of first N numbers",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "factorial-n",
            title: "Factorial of N numbers",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "reverse-array",
            title: "Reverse an array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "string-palindrome",
            title: "Check if a string is Palindrome or not",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "fibonacci",
            title: "Fibonacci Number",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "valid-palindrome",
            title: "Valid Palindrome",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          }
        ]
      },
      {
        id: "lec-1-6",
        title: "Learn Basic Hashing",
        totalProblems: 2,
        completedProblems: 0,
        problems: [
          {
            id: "hashing-theory",
            title: "Hashing Theory",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "counting-frequencies",
            title: "Counting frequencies of array elements",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/",
            isFreeProblem: true
          }
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
          {
            id: "selection-sort",
            title: "Selection Sort",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/sorting/selection-sort-algorithm/",
            isFreeProblem: true
          },
          {
            id: "bubble-sort",
            title: "Bubble Sort",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/bubble-sort-algorithm/",
            isFreeProblem: true
          },
          {
            id: "insertion-sort",
            title: "Insertion Sort",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/insertion-sort-algorithm/",
            isFreeProblem: true
          }
        ]
      },
      {
        id: "lec-2-2",
        title: "Sorting-II",
        totalProblems: 4,
        completedProblems: 0,
        problems: [
          {
            id: "merge-sort",
            title: "Merge Sort",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/merge-sort-algorithm/",
            isFreeProblem: true
          },
          {
            id: "recursive-bubble-sort",
            title: "Recursive Bubble Sort",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "recursive-insertion-sort",
            title: "Recursive Insertion Sort",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "quick-sort",
            title: "Quick Sort",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/quick-sort-algorithm/",
            isFreeProblem: true
          }
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
          {
            id: "largest-element",
            title: "Largest Element in Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "second-largest",
            title: "Second Largest Element in Array without sorting",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "check-sorted",
            title: "Check if array is sorted",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "remove-duplicates",
            title: "Remove duplicates from Sorted array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "left-rotate-one",
            title: "Left Rotate an array by one place",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "left-rotate-d",
            title: "Left rotate an array by D places",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "move-zeros",
            title: "Move Zeros to end",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "linear-search",
            title: "Linear Search",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "union-arrays",
            title: "Union of Two Sorted Arrays",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "missing-number",
            title: "Find the missing number in an array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "max-consecutive-ones",
            title: "Max Consecutive Ones",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "single-number",
            title: "Find the number that appears once, and other numbers twice",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "longest-subarray-sum-k",
            title: "Longest subarray with given sum K(positives)",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "longest-subarray-sum-k-negatives",
            title: "Longest subarray with sum K (Positives + Negatives)",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "two-sum",
            title: "Two Sum : Check if a pair with given sum exists in Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "sort-array-012",
            title: "Sort an array of 0's 1's and 2's",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          }
        ]
      },
      {
        id: "lec-3-2",
        title: "Medium",
        totalProblems: 17,
        completedProblems: 0,
        problems: [
          {
            id: "majority-element",
            title: "Majority Element (>N/2 times)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "kadanes-algorithm",
            title: "Kadane's Algorithm, maximum subarray sum",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "print-subarray-max-sum",
            title: "Print subarray with maximum subarray sum(extended version of above problem)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "stock-buy-sell",
            title: "Stock Buy And Sell",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "rearrange-by-sign",
            title: "Rearrange the array in alternating positive and negative items",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "next-permutation",
            title: "Next Permutation",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "leaders-array",
            title: "Leaders in an Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "longest-consecutive",
            title: "Longest Consecutive Sequence",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "set-matrix-zeros",
            title: "Set Matrix Zeros",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "rotate-matrix",
            title: "Rotate Matrix by 90 degrees",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "spiral-traversal",
            title: "Spiral Traversal of Matrix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "count-subarrays-xor-k",
            title: "Count Subarrays with given XOR",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "merge-overlapping-intervals",
            title: "Merge Overlapping Intervals",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "merge-sorted-arrays",
            title: "Merge two Sorted Arrays without extra space",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "find-missing-repeating",
            title: "Find the repeating and missing numbers",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "count-inversions",
            title: "Count inversions in an array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "reverse-pairs",
            title: "Count Reverse Pairs",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          }
        ]
      },
      {
        id: "lec-3-3",
        title: "Hard",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          {
            id: "pascal-triangle",
            title: "Pascal's Triangle",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "majority-element-n3",
            title: "Majority Elements(>N/3 times) | Find the elements that appears more than N/3 times in the array",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "3sum",
            title: "3 Sum",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "4sum",
            title: "4 Sum",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "largest-subarray-0-sum",
            title: "Largest subarray with 0 sum",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "count-subarrays-xor",
            title: "Count number of subarrays with given XOR(this clears the entire array)",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "merge-intervals",
            title: "Merge Intervals",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true
          }
        ]
      }
    ]
  },
  // Continue with other steps...
  {
    id: "step-4",
    title: "Binary Search [1D, 2D Arrays, Search Space]",
    description: "Master binary search techniques and their applications",
    totalProblems: 32,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-4-1",
        title: "BS on 1D Arrays",
        totalProblems: 13,
        completedProblems: 0,
        problems: [
          {
            id: "binary-search",
            title: "Binary Search to find X in sorted array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "implement-lower-bound",
            title: "Implement Lower Bound",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "implement-upper-bound",
            title: "Implement Upper Bound",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "search-insert-position",
            title: "Search Insert Position",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "floor-ceil",
            title: "Floor and Ceil in Sorted Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "first-last-occurrence",
            title: "Find First and Last Position of Element in Sorted Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "count-occurrences",
            title: "Count Occurrences in Sorted Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "search-rotated-array",
            title: "Search in Rotated Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "search-rotated-array-ii",
            title: "Search in Rotated Sorted Array II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "find-minimum-rotated",
            title: "Find Minimum in Rotated Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "find-rotation-count",
            title: "Find out how many times the array has been rotated",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "single-element",
            title: "Single Element in a Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "find-peak-element",
            title: "Find Peak Element",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          }
        ]
      }
      // Add more lectures for Binary Search...
    ]
  },
  {
    id: "step-5",
    title: "Strings [Basic and Medium]",
    description: "Learn string manipulation and pattern matching",
    totalProblems: 15,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-5-1",
        title: "Basic and Easy String Problems",
        totalProblems: 15,
        completedProblems: 0,
        problems: [
          {
            id: "remove-outer-parentheses",
            title: "Remove Outermost Parentheses",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "reverse-words",
            title: "Reverse Words in a String",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "largest-odd-number",
            title: "Largest odd number in string",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "longest-common-prefix",
            title: "Longest Common Prefix",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "isomorphic-strings",
            title: "Isomorphic Strings",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "check-anagrams",
            title: "Check whether one string is a rotation of another",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "valid-anagram",
            title: "Valid Anagram",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "sort-characters",
            title: "Sort Characters By Frequency",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "max-nesting-depth",
            title: "Maximum Nesting Depth of Parentheses",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "roman-to-integer",
            title: "Roman Number to Integer and vice versa",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "implement-atoi",
            title: "Implement Atoi",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "count-substrings",
            title: "Count Number of Substrings",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "longest-palindromic",
            title: "Longest Palindromic Substring[Do it without DP]",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "sum-beauty-substrings",
            title: "Sum of Beauty of all substring",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true
          },
          {
            id: "reverse-every-word",
            title: "Reverse Every Word in A String",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true
          }
        ]
      }
    ]
  },
  {
    id: "step-6",
    title: "Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]",
    description: "Master linked list data structures and algorithms",
    totalProblems: 31,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-6-1",
        title: "Learn 1D LinkedList",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          {
            id: "ll-introduction",
            title: "Introduction to LinkedList, learn about struct, and how is node represented",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/linked-list/linked-list-introduction",
            isFreeProblem: true
          },
          {
            id: "inserting-node",
            title: "Inserting a node in LinkedList",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/linked-list/insert-at-the-head-of-a-linked-list",
            isFreeProblem: true
          },
          {
            id: "deleting-node",
            title: "Deleting a node in LinkedList",
            difficulty: "Medium",
            status: "not-started",
            articleLink: "https://takeuforward.org/data-structure/delete-last-node-of-linked-list/",
            isFreeProblem: true
          },
          {
            id: "find-length",
            title: "Find the length of the linkedlist [learn traversal]",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/linked-list/find-the-length-of-a-linked-list",
            isFreeProblem: true
          },
          {
            id: "search-element",
            title: "Search an element in the LL",
            difficulty: "Easy",
            status: "not-started",
            articleLink: "https://takeuforward.org/linked-list/search-an-element-in-a-linked-list",
            isFreeProblem: true
          }
        ]
      }
      // Add more lectures for LinkedList...
    ]
  }
  // Continue with remaining steps (7-18)...
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