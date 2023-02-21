import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  let cells = [];
  if (guess) cells = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, 5).map((_, index) => (
        <span key={index} className={`cell ${cells[index]?.status ?? ""}`}>
          {cells[index]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
