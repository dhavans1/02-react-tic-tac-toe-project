import Header from "./Header";
import GameContainer from "./components/GameContainer/GameContainer";
import Players from "./components/Players/Players";
import GameBoard from "./components/GameContainer/GameBoard/GameBoard";
import Logger from "./components/Logger/Logger";
import { useState } from "react";
import { initPlayers } from "./shared/constants";
import * as utils from "./shared/utils.js";

function App() {
  const [gameBoard, updateGameBoard] = useState(utils.getInitGameBoard);
  const [logs, updateLogs] = useState([]);
  const [players, setPlayerNames] = useState(initPlayers);

  const gameResult = utils.checkGameStatus(gameBoard, logs, players);

  function handleBlockClick(newVal) {
    updateGameBoard((prevGameBoard) =>
      utils.setGameBoard(prevGameBoard, newVal),
    );
    updateLogs((prevLogs) => [
      {
        id: prevLogs.length,
        ...newVal,
      },
      ...prevLogs,
    ]);
  }

  function handleJumpClick(log) {
    const [updatedGameBoard, updatedLogs] = utils.jumpToMove(
      gameBoard,
      logs,
      log,
    );
    updateGameBoard(updatedGameBoard);
    updateLogs(updatedLogs);
  }

  function resetGame() {
    updateGameBoard(utils.getInitGameBoard);
    updateLogs([]);
  }

  function reverseMove() {
    if (logs.length > 1) {
      handleJumpClick(logs[1]);
    } else {
      resetGame();
    }
  }

  return (
    <>
      <Header />
      <GameContainer id="game-container">
        <Players
          id="players"
          players={players}
          activePlayerIndex={logs.length % 2}
          setPlayerNames={setPlayerNames}
        />

        <GameBoard
          id="game-board"
          gameBoard={gameBoard}
          players={players}
          activePlayerIndex={logs.length % 2}
          onBlockClick={handleBlockClick}
          gameResult={gameResult}
          resetGame={resetGame}
          reverseMove={reverseMove}
          gameStarted={logs.length}
        />
      </GameContainer>

      <Logger logs={logs} players={players} handleJumpClick={handleJumpClick} />
    </>
  );
}

export default App;
