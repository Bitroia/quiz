import React, { useCallback } from "react";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Option.css";

const Option = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return <div>Option</div>;
};

export default Option;
