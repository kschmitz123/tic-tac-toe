import "./game.css";
import React, { useState } from "react";
import Board from "./Board";
import { getRandomPlayer } from "../utils/game";

export default function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [nextPlayer, setNextPlayer] = useState(getRandomPlayer());

  function handleClick(index) {
    const currentHistory = history.slice(0, stepNumber + 1);
    const currentStep = currentHistory[currentHistory.length - 1];
    const squares = currentStep.squares.slice();
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = nextPlayer;

    setHistory(currentHistory.concat([{ squares: squares }]));
    setStepNumber(currentHistory.length);
    setNextPlayer(nextPlayer === "🐧" ? "🐻" : "🐧");
  }

  function jumpTo(step) {
    setStepNumber(step);
    setNextPlayer(step % 2 === 0);
  }
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const status = winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`;

  return (
    <div className="game">
      <div>
        <div className="status">{status}</div>
      </div>
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(index) => handleClick(index)}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
