import React, { useState } from 'react';

const questions = [
  {
    category: 'Geography',
    question: 'What is the capital of India?',
    options: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'New Delhi'
  },
  {
    category: 'History',
    question: 'Who was the first Prime Minister of India?',
    options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Indira Gandhi', 'Sardar Vallabhbhai Patel'],
    answer: 'Jawaharlal Nehru'
  },
  {
    category: 'Indian Sports',
    question: 'Which Indian cricketer is known as the "Master Blaster"?',
    options: ['Sachin Tendulkar', 'Virat Kohli', 'MS Dhoni', 'Rahul Dravid'],
    answer: 'Sachin Tendulkar'
  },
  {
    category: 'Military',
    question: 'Who is the current Chief of Army Staff of the Indian Army?',
    options: ['General Bipin Rawat', 'General Manoj Mukund Naravane', 'General Dalbir Singh Suhag', 'General Vijay Kumar Singh'],
    answer: 'General Manoj Mukund Naravane'
  }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
            <div className="question-category">Category: {questions[currentQuestion].category}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizApp;
