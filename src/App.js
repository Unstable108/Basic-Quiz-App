import "./App.css";
import Questions from "./components/questions";
import Result from "./components/result";
import questions from "./constants/questions.json";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestions = (isCorrect) => {
    //move on to the next question
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };
  return (
    <div className="App">
      <h1>|| Basic Quiz App ||</h1>

      {/* Questions Components */}
      {currentQuestion < questions.length && (
        <Questions
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestions}
        />
      )}
      {/* Result Components */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
