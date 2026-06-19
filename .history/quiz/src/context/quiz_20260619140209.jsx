import { Children, createContext, useReducer } from "react";
import questions


export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = {name: "Quiz"};

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
