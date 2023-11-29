import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers"

function Guess({ guessValue, answer }) {
  const statusClasses = checkGuess(guessValue,answer)?.map(letter => letter.status);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className={`cell ${statusClasses ? statusClasses[index] : ''}`}>
              {guessValue ? guessValue[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
