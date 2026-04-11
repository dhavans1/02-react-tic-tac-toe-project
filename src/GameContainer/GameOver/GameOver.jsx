export default function GameOver({result='It\'s a Tie!', ...props}) {

    return (
        <>
        <div id='game-over'>
            <h2>Game Over</h2>
            <p>{result}</p>
            <button {...props}>
                New Game
            </button>
        </div>
        </>
    );
}