import Block from "./Block/Block";
import Reset from "../Reset/Reset";
import GameOver from "../GameOver/GameOver";

export default function GameBoard({
  gameBoard,
  players,
  activePlayerIndex,
  onBlockClick,
  gameData,
  gameResult,
  resetGame,
  ...props
}) {
  /*
  Keeping it here for information on React rendering found while coding
  function handleBlockClick(row, col, val) {
    updateBlockClick((blockClickCounter) => blockClickCounter + 1);
    // data[row][col] = val;
    // updateData(data);
    // NOTE: Don't update existing data matrix like above since it will mutate the array but keep the same reference.
    // If there is no change in the variable's reference address then React will no re-render thinking there's no change in the variable
    // This applies to variables with references - Arrays and objects
    // Hence deep copying the matrix below and updatinsg the state with it

    updateData((data) => {
      const updatedData = [...data.map((v) => [...v])];
      updatedData[row][col] = val;
      return updatedData;
    });

    // checkGameStatus(); Executing here will NOT work since it's executed immediately (closure) before the state update done above. So, use useEffect.
    gameData([row, col, val]);
  }
  */

  return (
    <>
      <div id="pre-game" {...props}>
        {gameBoard.map((row, i) => (
          <ol key={`gameboard-${i}`}>
            {row.map((_, j) => (
              <Block
                key={`gameboard-${i}-${j}`}
                playerIndex={activePlayerIndex}
                onBtnClick={onBlockClick}
                row={i}
                col={j}
                data={gameBoard}
                disabled={gameBoard[i][j]}
              />
            ))}
          </ol>
        ))}
      </div>

      {gameResult?.gameOver && (
        <GameOver result={gameResult} onClick={resetGame}></GameOver>
      )}

      <Reset onBtnClick={resetGame}></Reset>
    </>
  );
}
