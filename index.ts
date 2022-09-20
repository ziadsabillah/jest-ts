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

// Function to calculate average score
export const averageScore = (
  testScores: TestScore[] | undefined | null
): number => {
  if (!testScores || testScores.length === 0) return 0;
  const totalScore = testScores.reduce((total, testScore) => {
    return total + testScore.score;
  }, 0);

  return totalScore / testScores.length;
};

// Function that formats the student data to be displayed
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
  students: Student[] | undefined | null,
  sendMail: Function
): FormattedStudent[] => {
  if (!students || students.length === 0) return [];
  const failedStudents = students.filter((student) => {
    const avgScore = averageScore(student.testScores);
    if (avgScore < 60) {
      sendMail(student.email);
      return true;
    }
    return false;
  });

  return formatStudentData(failedStudents);
};
