import Header from "./Header"
import GameContainer from "./GameContainer/GameContainer";
import Players from "./Players/Players";

function App() {

  return (
    <>
      <Header />
      <GameContainer id="game-container">
        <Players id="players"/>
      </GameContainer>
    </>
  )
}

export default App
