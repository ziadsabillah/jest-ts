/**
 *
 * this is a simple program that given a list of students and their test scores
 * returns the students that failed
 *
 * To fail a student must have an average score of less than 60
 *
 */

// Test Score interface

interface TestScore {
  subject: string;
  score: number;
}

// Student interface

interface Student {
  id: number;
  name: string;
  email: string;
  testScores: TestScore[];
}

interface FormattedStudent {
  id: number;
  name: string;
}

// Student Data

const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    email: "",
    testScores: [
      {
        subject: "Math",
        score: 50,
      },
      {
        subject: "English",
        score: 0,
      },
      {
        subject: "Science",
        score: 70,
      },
    ],
  },
];

// Function to calculate average score

export const averageScore = (testScores: TestScore[]): number => {
  if (testScores.length === 0 || !testScores) return 0;
  const totalScore = testScores.reduce((total, testScore) => {
    return total + testScore.score;
  }, 0);

  return totalScore / testScores.length;
};

// Function that formats the student data to be displayed

// the return type should be Student[] with testScores and email removed

export const formatStudentData = (students: Student[]): FormattedStudent[] => {
  return students.map((student) => {
    return {
      id: student.id,
      name: student.name,
    };
  });
};

// Function to get students that failed

export const getStudentsThatFailed = (
  students: Student[]
): FormattedStudent[] => {
  return formatStudentData(
    students.filter((student) => {
      return averageScore(student.testScores) < 60;
    })
  );
};

// Print students that failed

console.log(getStudentsThatFailed(students));
