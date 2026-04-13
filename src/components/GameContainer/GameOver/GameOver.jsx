export default function GameOver({ result, ...props }) {
  return (
    <>
      <div id="game-over">
        <h2>Game Over</h2>
        {result.winner ? <p>{result.winner.name} Won!</p> : <p>It's a Tie!</p>}
        <button {...props}>New Game</button>
      </div>
    </>
  );
}
