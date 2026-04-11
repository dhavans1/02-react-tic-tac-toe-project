import Header from "./Header"
import GameContainer from "./GameContainer/GameContainer";
import Players from "./Players/Players";
import GameBoard from "./GameContainer/GameBoard/GameBoard";
import Logger from "./Logger/Logger";
import { useState } from "react";

function App() {

  const [logs, sendLogData] = useState([]);
  const [players, setPlayerNames] = useState(['Player 1', 'Player 2']);

  return (
    <>
      <Header />
      <GameContainer id="game-container">

        <Players
          id="players"
          players={players}
          setPlayerNames={setPlayerNames}
        />

        <GameBoard
          id="game-board"
          gameData={(v) => v.length ? sendLogData([...logs, v]) : sendLogData([])}
          players={players}
        />

        <Logger logs={logs} players={players}/>
      </GameContainer>
    </>
  )
}

export default App
