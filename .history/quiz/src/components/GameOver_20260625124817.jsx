import React from 'react'
import { QuizContext } from '../context/quiz'
import { useContext } from 'react'
import WellDone from "../img/welldone.svg"

const GameOver = () => {
  return (
    <div id='gameover'>
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: x</p>
        <p>Você acertou u de z perguntas.</p>
    </div>
  )
}

export default GameOver