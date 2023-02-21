import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [showBanner, setShowBanner] = useState(null);

  function addGuess(guess) {
    if (guess.length !== 5 || guesses.find((item) => item.label === guess))
      return;

    const nextGuesses = [...guesses, { id: Math.random(), label: guess }];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setShowBanner("happy");
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setShowBanner("sad");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        addGuess={addGuess}
        showBanner={showBanner}
        numOfGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
