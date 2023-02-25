import React from "react";

function InputForm({ words, setWords, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextWord = [...words, guess];
    setWords(nextWord);
    setGuess("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={disabled}
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          pattern="[a-zA-Z]{5}"
          maxLength={5}
          title="5 letter word"
          autoFocus
        />
      </form>
    </>
  );
}

export default InputForm;
