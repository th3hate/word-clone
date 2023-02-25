import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm/InputForm";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [words, setWords] = React.useState([]);
  const [playing, setPlaying] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [answer, setAnswer] = React.useState(sample(WORDS));

  console.info(answer);

  React.useEffect(() => {
    if (words.some((word) => word === answer)) {
      setPlaying(false);
      setStatus("win");
    }
    if (words.length > 5 && words[5] !== answer) {
      setPlaying(false);
      setStatus("lose");
    }
  }, [words, answer]);

  const resetGame = () => {
    setWords([]);
    setStatus("");
    setPlaying(true);
    setAnswer(sample(WORDS));
  };

  const validatedGuesses = words.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults words={words} answer={answer} />
      <InputForm words={words} setWords={setWords} disabled={!playing} />
      <Keyboard validatedGuesses={validatedGuesses} />

      {!playing && (
        <>
          <Banner
            status={status}
            answer={answer}
            guesses={words.length}
            reset={resetGame}
          />
        </>
      )}
    </>
  );
}

export default Game;
