import { averageScore, formatStudentData, getStudentsThatFailed } from ".";

describe("getAverageTests", () => {
  it("should return the average score based on the test scores", () => {
    const testScores = [
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
    ];
    const result = averageScore(testScores);
    expect(result).toBe(40);
  });

  it("should return 0 if there are no test scores", () => {
    const testScores = [];
    const result = averageScore(testScores);
    expect(result).toBe(0);
  });

  it("should return 0 if the test scores are undefined", () => {
    const testScores = undefined;
    const result = averageScore(testScores);
    expect(result).toBe(0);
  });

  it("should return 0 if the test scores are null", () => {
    const testScores = null;
    const result = averageScore(testScores);
    expect(result).toBe(0);
  });
});

describe("getStudentsThatFailed", () => {
  it("should return an array of students that have failed", () => {
    const mailFn = jest.fn();
    const students = [
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

    const result = getStudentsThatFailed(students, mailFn);
    expect(result).toEqual([
      {
        id: 1,
        name: "John Doe",
      },
    ]);
  });

  it("should return an empty array if there are no students", () => {
    const mailFn = jest.fn();

    const students = [];
    const result = getStudentsThatFailed(students, mailFn);
    expect(result).toEqual([]);
  });

  it("should return an empty array if the students are undefined", () => {
    const mailFn = jest.fn();

    const students = undefined;
    const result = getStudentsThatFailed(students, mailFn);
    expect(result).toEqual([]);
  });

  it("should return an empty array if all students passed", () => {
    const mailFn = jest.fn();
    const students = [
      {
        id: 1,
        name: "John Doe",
        email: "",
        testScores: [
          {
            subject: "Math",
            score: 90,
          },
          {
            subject: "English",
            score: 80,
          },
          {
            subject: "Science",
            score: 70,
          },
        ],
      },
    ];
    const result = getStudentsThatFailed(students, mailFn);
    expect(result).toEqual([]);
  });

  it("should call the mail function if a student has failed", () => {
    const mailFn = jest.fn();
    const students = [
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
    getStudentsThatFailed(students, mailFn);
    expect(mailFn).toHaveBeenCalled();
  });
});

describe("formatStudentData", () => {
  it("should return an array of students with only the id and name", () => {
    const students = [
      {
        id: 1,
        name: "John Doe",
        email: "",
        testScores: [
          {
            subject: "Math",
            score: 90,
          },
          {
            subject: "English",
            score: 80,
          },
          {
            subject: "Science",
            score: 70,
          },
        ],
      },
      {
        id: 2,
        name: "Caly Doe",
        email: "",
        testScores: [
          {
            subject: "Math",
            score: 90,
          },
          {
            subject: "English",
            score: 80,
          },
          {
            subject: "Science",
            score: 70,
          },
        ],
      },
    ];
    const result = formatStudentData(students);
    expect(result).toEqual([
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Caly Doe",
      },
    ]);
  });
});
