import React from "react";

function Banner({ status, guesses, answer, reset }) {
  if (status === "win") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guesses} guesses</strong>.
          <br />
          <button onClick={reset}>
            <strong>PLAY AGAIN</strong>
          </button>
        </p>
      </div>
    );
  }
  if (status === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong> {answer}</strong>.
          <br />
          <button onClick={reset}>
            <strong>PLAY AGAIN</strong>
          </button>
        </p>
      </div>
    );
  }

  return <div />;
}

export default Banner;
