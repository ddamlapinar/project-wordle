import React from "react";
import { checkGuess } from "../../game-helpers";

function Cell({ guessValue, answer, index }) {
  const statusClasses =
    checkGuess(guessValue, answer)?.map((letter) => letter.status) || [];
  return (
    <span className={`cell ${statusClasses ? statusClasses[index] : ""}`}>
      {guessValue ? guessValue[index] : null}
    </span>
  );
}

export default Cell;
