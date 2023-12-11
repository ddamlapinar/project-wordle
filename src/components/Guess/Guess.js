import React from "react";
import Cell from "../Cell";
import { range } from "../../utils";

function Guess({ guessValue, answer }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell key={index} guessValue={guessValue} answer={answer} />
      ))}
    </p>
  );
}

export default Guess;
