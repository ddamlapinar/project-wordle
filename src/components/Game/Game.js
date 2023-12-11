import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import Input from "../Input/Input";
import GuessList from "../GuessList";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  const [gameOver, setGameOver] = useState(false);
  const guessCount = guessResults.length;

  function handleGameStatusChange(guess) {
    if (answer === guess.toUpperCase()) {
      setGameStatus("won");
      setGameOver(true);
    } else if (guessResults.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("lost");
      setGameOver(true);
    }
  }

  function handleSubmitGuess(guess) {
    setGuessResults([...guessResults, guess]);
    handleGameStatusChange(guess);
  }

  return (
    <>
      <GuessList guessResults={guessResults} answer={answer} />
      <Input handleSubmitGuess={handleSubmitGuess} disabled={gameOver} />
      <Banner gameStatus={gameStatus} answer={answer} guessCount={guessCount} />
    </>
  );
}

export default Game;
