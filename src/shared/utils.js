import { initGameBoard, winnerMatrix } from "./constants";

export function checkGameStatus(gameBoard, logs, players) {
  if (logs.length < 3) {
    return {
      gameOver: false,
    };
  }

  for (let player of players) {
    for (const winningSet of winnerMatrix) {
      if (
        gameBoard[winningSet[0].row][winningSet[0].col] === player.symbol &&
        gameBoard[winningSet[1].row][winningSet[1].col] === player.symbol &&
        gameBoard[winningSet[2].row][winningSet[2].col] === player.symbol
      ) {
        return {
          gameOver: true,
          winner: player,
        };
      }
    }
  }

  if (logs.length === 9) {
    // Tie
    return {
      gameOver: true,
      winner: null,
    };
  }

  return {
    gameOver: false,
  };
}

export function getInitGameBoard() {
  return [...initGameBoard.map((row) => [...row])];
}

export function jumpToMove(gameBoard, logs, move) {
  for (let i = 0; i < logs.length - 1 - move.id; i++) {
    gameBoard[logs[i].row][logs[i].col] = null;
  }
  const newLogs = logs.slice(logs.length - 1 - move.id);

  return [[...gameBoard.map((row) => [...row])], newLogs];
}

export function setGameBoard(gameBoard, { row, col, val }) {
  gameBoard[row][col] = val;
  return [...gameBoard.map((row) => [...row])];
}
