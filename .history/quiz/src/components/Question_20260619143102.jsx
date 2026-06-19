import React from 'react'
import { useContext } from 'react'
import { QuizContext } from './context/quiz'

export const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div>Question</div>
  )
}
