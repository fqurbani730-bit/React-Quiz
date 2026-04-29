import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default function DefaultScreen({ questions, dispatch }) {
  return (
    <div className="start">
      <h2>Wellcome to the React Quiz!</h2>
      <h3>{questions.length} questions to test your React mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Let's start
      </button>
    </div>
  );
}
