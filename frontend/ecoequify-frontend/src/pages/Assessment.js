import React, { useState } from "react";
import "./Assessment.css";

const questions = [
  { id: 1, question: "What is the capital of France?", correctAnswer: "Paris", options: ["Paris", "London", "Berlin", "Madrid"] },
  { id: 2, question: "What is 2 + 2?", correctAnswer: "4", options: ["3", "4", "5", "6"] },
  { id: 3, question: "What is the largest planet?", correctAnswer: "Jupiter", options: ["Mars", "Earth", "Jupiter", "Venus"] },
  { id: 4, question: "Who wrote 'Hamlet'?", correctAnswer: "Shakespeare", options: ["Shakespeare", "Dickens", "Tolstoy", "Hemingway"] },
  { id: 5, question: "Which is the smallest prime number?", correctAnswer: "2", options: ["1", "2", "3", "5"] },
  { id: 6, question: "What is the square root of 16?", correctAnswer: "4", options: ["3", "4", "5", "6"] },
  { id: 7, question: "What is the capital of Japan?", correctAnswer: "Tokyo", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"] },
  { id: 8, question: "Which element has the chemical symbol 'O'?", correctAnswer: "Oxygen", options: ["Oxygen", "Gold", "Silver", "Iron"] },
  { id: 9, question: "What is the boiling point of water in Celsius?", correctAnswer: "100", options: ["90", "100", "120", "150"] },
  { id: 10, question: "Which ocean is the largest?", correctAnswer: "Pacific", options: ["Atlantic", "Indian", "Pacific", "Arctic"] },
];

const Assessment = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [showScoreCard, setShowScoreCard] = useState(false);

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmitQuiz = () => {
    let calculatedScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        calculatedScore += 10; // Each question worth 10 points
      }
    });
    setScore(calculatedScore);
    alert("Quiz Submitted!");
  };

  const handleScoreCard = () => {
    setShowScoreCard(true);
  };

  const handleAnalysis = () => {
    alert("Analysis in progress!"); // Mock analysis
  };

  return (
    <div className="assessment-container">
      <header className="assessment-header">
        <h1>Assessment</h1>
      </header>
      <section className="instructions">
        <h2>Instructions</h2>
        <p>
          Please answer all the questions. Click "Submit Quiz" when you are done to see your score.
        </p>
      </section>
      <form className="quiz-form">
        {questions.map((q) => (
          <div className="question" key={q.id}>
            <p>{q.id}. {q.question}</p>
            {q.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  onChange={() => handleOptionChange(q.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
      </form>

      <div className="button-container">
        <button type="button" onClick={handleSubmitQuiz}>Submit Quiz</button>
        <button type="button" onClick={handleScoreCard} disabled={score === null}>
          Get Score Card
        </button>
        <button type="button" onClick={handleAnalysis} disabled={!showScoreCard}>
          Analysis
        </button>
      </div>

      {score !== null && (
        <section className="result">
          <h2>Your Score: {score}/100</h2>
        </section>
      )}

      {showScoreCard && (
        <section className="scorecard">
          <h2>Score Card</h2>
          <ul>
            {questions.map((q) => (
              <li key={q.id}>
                <strong>{q.question}</strong> - Your Answer:{" "}
                {answers[q.id] || "Not Answered"} - Correct Answer: {q.correctAnswer} -{" "}
                {answers[q.id] === q.correctAnswer ? "Correct ✅" : "Wrong ❌"}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Assessment;
