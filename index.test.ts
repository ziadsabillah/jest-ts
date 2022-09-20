import { averageScore } from ".";

describe("index", () => {
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
});
