import React from "react";

export default function Quiz({
  questions,
  dispatch,
  index,
  answer,
  time,
  formatTimeer,
}) {
  const question = questions[index];
  return (
    <div className="options">
      <input
        type="range"
        min="0"
        max={questions.length - 1}
        readOnly
        value={index}
      />
      <p>
        Question {index + 1}/{questions.length}
      </p>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          className=" btn btn-option"
          onClick={() => dispatch({ type: "answerQuestion", payload: option })}
        >
          {option}
        </button>
      ))}
      {answer && (
        <button
          className="btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}

      <p className="timer">Time Remaining: {formatTimeer(time)} </p>
    </div>
  );
}
