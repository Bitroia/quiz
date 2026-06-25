import React from 'react'
import { QuizContext } from '../context/quiz'
import { useContext } from 'react'
import WellDone from "../img/welldone.svg"

const GameOver = () => {
  return (
    <div id='gameover'>
        <h2>Fim de Jogo!</h2>
        <p>Pontuação: x</p>
        <p>Voc</p>
    </div>
  )
}

export default GameOver