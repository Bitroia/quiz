import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import { useContext } from 'react'
import { Question } from './components/Question'

function App() {
   const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      <Welcome/>
    </div>
  )
}

export default App
