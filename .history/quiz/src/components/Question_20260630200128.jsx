import React from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Question.css";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  import Option from "./Option";

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => {
          <Option option={option} key ={/>;
        })}
        <p>Opções</p>
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
        Continuar
      </button>
    </div>
  );
};
