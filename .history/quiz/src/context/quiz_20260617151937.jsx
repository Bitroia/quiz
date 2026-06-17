import { Children, createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value


  return <QuizContext.Provider>{children}</QuizContext.Provider>;
};
