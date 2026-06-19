import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return <div>
    <p>Pergunta 0 a </p>
  </div>;
};
