"use client"
import { useState } from "react";

// Define types for answers
interface Answer {
  question: string;
  answer: string;
}

// Predefined questions
const predefinedQuestions: string[] = [
  "What is your name?",
  "What is your favorite color?",
  "What is your hobby?",
];

export default function Quiz() {
  // State types
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  // Handle answer submission
  const handleAnswerSubmit = (answer: string) => {
    const updatedAnswers: Answer[] = [
      ...answers,
      { question: predefinedQuestions[currentQuestionIndex], answer },
    ];
    setAnswers(updatedAnswers);

    // Move to the next question
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < predefinedQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setCompleted(true); // Mark as completed once all questions are answered
    }
  };

  // Handle restart functionality
  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow space-y-6">
        <div className="space-y-4">
          {/* Display the current question and input box */}
          {!completed && (
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold mb-4">
                {predefinedQuestions[currentQuestionIndex]}
              </h2>
              <input
                type="text"
                placeholder="Type your answer..."
                className="w-full px-3 py-2 border rounded mb-4"
                id="answerInput"
              />
              <button
                onClick={() => {
                  const input = document.getElementById("answerInput") as HTMLInputElement;
                  const answer = input.value.trim();
                  if (answer) {
                    handleAnswerSubmit(answer);
                  }
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Submit Answer
              </button>
            </div>
          )}

          {/* Display all answers */}
          <div>
            <h2 className="text-xl font-semibold mb-4">All Answers</h2>
            <ul className="space-y-2 mb-4">
              {answers.map((item, index) => (
                <li key={index} className="border-b py-2">
                  <strong>{item.question}</strong>: {item.answer}
                </li>
              ))}
            </ul>
          </div>

          {/* After completion, show the restart button */}
          {completed && (
            <div className="border-b pb-4">
              <button
                onClick={handleRestart}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
              >
                Restart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
