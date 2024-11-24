import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Assessment.css";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const questions = [
  { id: 1, question: "What is the capital of France?", correctAnswer: "Paris", options: ["Paris", "London", "Berlin", "Madrid"], category: "Geography" },
  { id: 2, question: "What is 2 + 2?", correctAnswer: "4", options: ["3", "4", "5", "6"], category: "Math" },
  { id: 3, question: "What is the largest planet?", correctAnswer: "Jupiter", options: ["Mars", "Earth", "Jupiter", "Venus"], category: "Science" },
  { id: 4, question: "Who wrote 'Hamlet'?", correctAnswer: "Shakespeare", options: ["Shakespeare", "Dickens", "Tolstoy", "Hemingway"], category: "Literature" },
  { id: 5, question: "Which is the smallest prime number?", correctAnswer: "2", options: ["1", "2", "3", "5"], category: "Math" },
  { id: 6, question: "What is the square root of 16?", correctAnswer: "4", options: ["3", "4", "5", "6"], category: "Math" },
  { id: 7, question: "What is the capital of Japan?", correctAnswer: "Tokyo", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], category: "Geography" },
  { id: 8, question: "Which element has the chemical symbol 'O'?", correctAnswer: "Oxygen", options: ["Oxygen", "Gold", "Silver", "Iron"], category: "Science" },
  { id: 9, question: "What is the boiling point of water in Celsius?", correctAnswer: "100", options: ["90", "100", "120", "150"], category: "Science" },
  { id: 10, question: "Which ocean is the largest?", correctAnswer: "Pacific", options: ["Atlantic", "Indian", "Pacific", "Arctic"], category: "Geography" },
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

  const analysisData = questions.reduce((acc, q) => {
    const category = q.category;
    if (!acc[category]) {
      acc[category] = { correct: 0, total: 0 };
    }
    if (answers[q.id] === q.correctAnswer) {
      acc[category].correct += 1;
    }
    acc[category].total += 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(analysisData),
    datasets: [
      {
        label: "Correct Answers",
        data: Object.values(analysisData).map((data) => data.correct),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Total Questions",
        data: Object.values(analysisData).map((data) => data.total),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="assessment-container">
      <header className="assessment-header">
        <h1>Assessment</h1>
      </header>
      <section className="instructions">
        <h2>Instructions</h2>
        <p>Please answer all the questions. Click "Submit Quiz" when you are done to see your score.</p>
      </section>
      <form className="quiz-form">
        {questions.map((q) => (
          <div className="question" key={q.id}>
            <p>
              {q.id}. {q.question}
            </p>
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
        <button type="button" onClick={handleSubmitQuiz}>
          Submit Quiz
        </button>
        <button type="button" onClick={handleScoreCard} disabled={score === null}>
          Get Score Card
        </button>
      </div>

      {showScoreCard && (
        <>
          <section className="certificate">
            <h2>Congratulations!</h2>
            <p>You have completed the quiz.</p>
            <p>Your Score: {score}/100</p>
            <p>Keep up the good work!</p>
          </section>

          <section className="analysis">
            <h2>Performance Analysis</h2>
            <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
          </section>
        </>
      )}
    </div>
  );
};

export default Assessment;
