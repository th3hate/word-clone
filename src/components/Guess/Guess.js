import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  return (
    <p className="guess">
      {range(5).map((num, index) => (
        <span
          className={`cell ${
            word ? checkGuess(word, answer)[index].status : ""
          } `}
          key={num}
        >
          {word ? word[num] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
