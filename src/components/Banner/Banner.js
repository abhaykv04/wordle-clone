import React from "react";

function Banner({ variant, numOfGuesses, answer }) {
  return variant === "happy" ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfGuesses} guess(es)</strong>.
      </p>
    </div>
  ) : variant === "sad" ? (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  ) : null;
}

export default Banner;
