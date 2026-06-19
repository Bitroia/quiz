import { Children, createContext, useReducer } from "react";
import questions from 


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = {name: "Quiz"};

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
