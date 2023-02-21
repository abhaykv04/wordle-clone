import React, { useState } from "react";
import Banner from "../Banner/Banner";

function GuessInput({ addGuess, showBanner, numOfGuesses, answer }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setGuess("");
    addGuess(guess);
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={showBanner}
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
      {showBanner && (
        <Banner
          variant={showBanner}
          numOfGuesses={numOfGuesses}
          answer={answer}
        />
      )}
    </>
  );
}

export default GuessInput;
