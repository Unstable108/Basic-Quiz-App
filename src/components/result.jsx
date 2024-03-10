import React from "react";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  //filter out the correct answer
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You scored {correctAnswers} out of {questions.length} questions.
        <span onClick={resetQuiz}>Click Here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q {index + 1}. {question.question}
              <b>
                {userAnswers[index]
                  ? " "
                  : `- ${
                      question.answerOptions.find((ans) => ans.isCorrect).text
                    }`}
              </b>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
