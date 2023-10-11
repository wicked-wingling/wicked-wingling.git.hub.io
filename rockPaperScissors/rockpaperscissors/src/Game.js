import React, { useState } from "react";
import styles from './Game.module.css';

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

//STYLES COMPONENTS..
const choiceStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 40
};
const emojiStyles = {
  fontSize: 64,
  marginRight: 20
};
const nameStyles = {
  margin: 0,
  fontSize: 24,
  color: '#ffff'
};
const resultStyle = {
  marginTop: 40,
  fontSize: 48,
  color: '#ffff'
};

function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);
  //ADDED SCORE STATE TO KEEP TRACK OF PROGRESS
  const [playerScore, setPlayerScore] = useState(0);
  const [codeyScore, setCodeyScore] = useState(0);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
      setPlayerScore(prev => prev +1);
    } else {
      setResult("You lose!");
      setCodeyScore(prev => prev +1);
    }
  };

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
    //ADDED SCORE COUNTER TO BE RESET
    setPlayerScore(0);
    setCodeyScore(0);
  };

  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: 48, marginTop: 0 }}>Rock Paper Scissors</h1>
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
            className={styles.button}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div>
          <div style={choiceStyles}>
            <span style={emojiStyles }>{playerChoice.emoji}</span>
            <p style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles} className={styles.results}>
            <span style={emojiStyles }>{codeyChoice.emoji}</span>
            <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyle}>{result}</h2>
          <h2>Computer Score: {codeyScore}</h2>
          <h2>Player Score: {playerScore}</h2>
          <button onClick={resetGame} className={styles.button}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
