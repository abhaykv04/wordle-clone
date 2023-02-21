import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, 6).map((_, index) => (
        <Guess key={index} guess={guesses[index]?.label} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
