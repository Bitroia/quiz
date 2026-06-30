import React, { useCallback } from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Option.css";

const Option = ({option}) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return <div>
    <h1>Opções</h1>
  </div>;
};

export default Option;
