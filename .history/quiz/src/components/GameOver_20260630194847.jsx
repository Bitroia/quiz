import React from "react";
import { QuizContext } from "../context/quiz";
import { useContext } from "react";
import WellDone from "../img/welldone.svg";
import "./GameOver.css"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <p>Pontuação: {}</p>
      <p>Você acertou x de z perguntas.</p>
      <img src={WellDone} alt="Fim do Quiz" />
      <button>Reiniciar</button>
    </div>
  );
};

export default GameOver;
