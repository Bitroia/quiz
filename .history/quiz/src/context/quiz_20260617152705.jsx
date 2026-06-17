import { Children, createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = {name: };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
